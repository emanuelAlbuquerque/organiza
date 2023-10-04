import { PAGO, A_PAGAR, RECEBIDO, A_RECEBER } from '@/constants/status'
import request from '@/services/axios'
import { getCurrentDateTime } from '@/services/dates'

class MovimentsController {
  static async listMovimentsRecents() {
    const res = await request.get(`/moviments?_sort=date&_order=desc&_limit=5`)

    return res.data
  }

  static async listExpenses() {
    const res = await request.get(`/moviments?type=expenses`)

    return res.data
  }

  static async listExpensesPayment() {
    const res = await request.get(`/moviments?type=expenses&status=${PAGO}`)

    return res.data
  }

  static async listExpensesPaymentWaiting() {
    const res = await request.get(`/moviments?type=expenses&status=${A_PAGAR}`)

    return res.data
  }

  static async listExpensesByMonth(month = new Date().getMonth() + 1) {
    const res = await request.get(
      `/moviments?type=expenses&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async listExpensesPaymentByMonth(month = new Date().getMonth() + 1) {
    const res = await request.get(
      `/moviments?type=expenses&status=${PAGO}&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async listExpensesPaymentWaitingByMonth(
    month = new Date().getMonth() + 1
  ) {
    const res = await request.get(
      `/moviments?type=expenses&status=${A_PAGAR}&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async listRecipes() {
    const res = await request.get(`/moviments?type=recipes`)

    return res.data
  }

  static async listRecipesReceived() {
    const res = await request.get(`/moviments?type=recipes&status=${RECEBIDO}`)

    return res.data
  }

  static async listRecipesReceiveWaiting() {
    const res = await request.get(`/moviments?type=recipes&status=${A_RECEBER}`)

    return res.data
  }

  static async listRecipesByMonth(month = new Date().getMonth() + 1) {
    const res = await request.get(
      `/moviments?type=recipes&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async listRecipesReceivedByMonth(month = new Date().getMonth() + 1) {
    const res = await request.get(
      `/moviments?type=recipes&status=${RECEBIDO}&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async listRecipesReceiveWaitingByMonth(
    month = new Date().getMonth() + 1
  ) {
    const res = await request.get(
      `/moviments?type=recipes&status=${A_RECEBER}&date_gte=2023-${month}-01T00:00:00Z&date_lte=2023-${month}-31T23:59:59Z`
    )

    return res.data
  }

  static async createRecipe(recipe) {
    const res = await request.post(`/moviments`, {
      ...recipe
    })

    return res.data
  }

  static async createExpense(expense) {
    const res = await request.post(`/moviments`, {
      ...expense
    })

    return res.data
  }

  static async receivePayment(account) {
    const res = await request.put(`/moviments/${account.id}`, {
      ...account,
      date: getCurrentDateTime(),
      status: RECEBIDO
    })

    return res.data
  }

  static async payBill(account) {
    const res = await request.put(`/moviments/${account.id}`, {
      ...account,
      date: getCurrentDateTime(),
      status: PAGO
    })

    return res.data
  }

  static async higherExpensesByMonth(month = new Date().getMonth() + 1) {
    const res = await request.get(
      `/moviments?type=expenses&status=${PAGO}&date_gte=2023-${month}-01T00:00:00Z&date_lt=2023-${month}-31T23:59:59Z&_group=category&_sum=price&_sort=-_sum`
    )
  }

  static async listMoviments() {
    const res = await request.get(
      `/moviments?_sort=date&_order=desc$`
    )

    return res.data
  }
}

export { MovimentsController }
