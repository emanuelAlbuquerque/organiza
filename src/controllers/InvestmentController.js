import { A_RETIRAR } from '@/constants/status'
import request from '@/services/axios'

class InvestmentController {
  static async createInvestment(inventiment) {
    const res = await request.post('/investments', {
      ...inventiment
    })

    return res.data
  }

  static async listInvestments() {
    const res = await request.get(`/investments?status=${A_RETIRAR}`)

    return res.data
  }
}

export {
  InvestmentController
}