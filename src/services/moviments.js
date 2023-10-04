import { MovimentsController } from '@/controllers/MovimentsController'
import { NotificationAction } from './notifications'

async function getMoneyTotalResp() {
  const recipes = await MovimentsController.listRecipesReceived()
  const expenses = await MovimentsController.listExpensesPayment()

  const totalMoneyRecipes = recipes.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
  const totalMoneyExpenses = expenses.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)

  return totalMoneyRecipes - totalMoneyExpenses
}

function statusMoney(money) {
  if (money < 0) {
    NotificationAction.notificationWarning('Vamo ganhar um dinhero né, o seu saldo está no vermelho')
  }

  if (money > 0 && money < 10) {
    NotificationAction.notificationWarning("Fique ligado, o seu saldo está perto de acabar.")
  }

  if (money === 0) {
    NotificationAction.notificationWarning("NÃO GASTE MAIS NADA!!! O SEU SALDO ESTÀ EM R$ 0,00")
  }
}

function statusLimit(category) {
  const porcentage = category.spending * 100 / category.limit

  if (porcentage > 100) {
    NotificationAction.notificationWarning(`Você ultrapassou o limite de gastos definido para: ${category.name}`)
  }

  if (porcentage === 100) {
    NotificationAction.notificationWarning(`Você atingiu o limite de gastos definido para: ${category.name}`)
  }

  if (porcentage >= 80 && porcentage < 100) {
    NotificationAction.notificationWarning(`Você está chegando perto de atingir o limite definido em: ${category.name}`)
  }
}

export {
  getMoneyTotalResp,
  statusMoney,
  statusLimit
}