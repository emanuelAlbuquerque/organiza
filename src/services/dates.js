import { IS_AFTER, IS_BEFORE, IS_SAME } from '@/constants/status'
import moment from 'moment'
import momentPtBr from 'moment/locale/pt-br'

moment.locale('pt-br', momentPtBr)

function parseDateFromDDMMYYYY(date) {
  return moment(date).format('DD/MM/YYYY')
}

function getCurrentDateTime() {
  return moment().format('YYYY-MM-DDTHH:mm')
}

function currentDate() {
  return moment()
}

function compareDates(date) {
  const dateFormat = moment(date, 'YYYY-MM-DD')
  const currentDate = moment()

  if (dateFormat.isBefore(currentDate)) return IS_BEFORE
  if (dateFormat.isSame(currentDate)) return IS_SAME
  if (dateFormat.isAfter(currentDate)) return IS_AFTER
}

function getNameMonth(month) {
  return moment().month(month).format('MMMM')
}

export {
  parseDateFromDDMMYYYY,
  currentDate,
  compareDates,
  getNameMonth,
  getCurrentDateTime
}