import {
    NOTIFICATION_SHOW,
    NOTIFICATION_HIDE,
  } from '../consts'
  
  import { v4 } from 'node-uuid'
  
  export interface INotificationParams {
    status: string;
    text: string;
  }

  export function showNotification(params : INotificationParams) {
    return {
      type: NOTIFICATION_SHOW,
      status: params.status,
      text: params.text,
      id: v4(),
    }
  }
  
  export function hideNotification(id : string) {
    return {
      type: NOTIFICATION_HIDE,
      id,
    }
  }