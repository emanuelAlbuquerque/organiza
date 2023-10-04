import { NotificationManager } from 'react-notifications'

class NotificationAction {

  static notificationSucesss(message) {
    NotificationManager.success('Sucesso', message, 4000)
  }

  static notificationError(message) {
    NotificationManager.error('Erro', message, 4000)
  }

  static notificationWarning(message) {
    NotificationManager.warning('Atenção', message, 4000)
  }

}

export {
  NotificationAction
}