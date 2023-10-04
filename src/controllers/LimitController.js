import request from '@/services/axios'

class LimitController {
  static async listLimits() {
    const res = await request.get(`/categories?_sort=limit,spending&_order=desc, desc`)

    return res.data
  }

  static async createOrUpdateLimit(item, limit) {
    const res = await request.put(`/categories/${item.id}`, {
      ...item,
      limit
    })

    return res
  }

  static async getCategorie(ID) {
    const res = await request.get(`/categories/${ID}`)

    return res.data
  }

  static async updateSpending(ID, value) {
    const limit = await this.getCategorie(ID)

    if (limit) {
      const res = await request.put(`/categories/${limit.id}`, {
        ...limit,
        spending: value
      })

      return res.data
    } else {
      return null
    }
  }
}

export {
  LimitController
}