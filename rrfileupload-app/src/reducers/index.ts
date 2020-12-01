import { combineReducers } from 'redux'
import notificationList, * as fromNotification from './notification'
import uploaded, * as fromUploaded from './uploaded'

export const rootReducer = combineReducers({
  notificationList,
  uploaded,
})

export interface IAppState {
  
}

//NOTIFICATIONS
export const getArrayNotifications = (state, action) =>
  fromNotification.getArrayNotifications(state.notificationList, action)

//UPLOADED
export const getUploadedItems = (state) =>
  fromUploaded.getFilesArray(state.uploaded)

export const isUploadFetching = (state) =>
  fromUploaded.getIsFetching(state.uploaded)