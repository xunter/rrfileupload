import { combineReducers } from 'redux'

import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
  } from '../consts'

const notification = (state = {}, action) => {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return {
        id: action.id,
        text: action.text,
        status: action.status,
      }

    default:
      return state
    }
}

const byId = (state = {}, action) => {
  switch(action.type) {
    case NOTIFICATION_SHOW:
      return {
        ...state,
        [action.id]: notification(state[action.id], action),
      }
    case NOTIFICATION_HIDE:
      let nextState = { ...state }
      delete nextState[action.id]
      return nextState
    default:
      return state
  }
}

const allIds = (state = [], action) => {
  switch(action.type) {
    case NOTIFICATION_SHOW:
      return [...state, action.id]
    case NOTIFICATION_HIDE:
      const index = state.findIndex((i) => i === action.id)

      let nextState = [
        ...state.slice(0, index),
        ...state.slice(index+1),
      ]
      return nextState
    default:
      return state
  }
}

const notificationList = combineReducers({
  byId,
  allIds,
})

export default notificationList

export const getArrayNotifications = (state) => {
  return state.allIds.map((id : string) => state.byId[id])
}
