import { EXPENSE, RECIPES } from '@/constants/type'
import request from '@/services/axios'

class CategoriesController {
  static async listCategoriesExpenses() {
    const res = await request.get(`/categories?type=${EXPENSE}`)

    return res.data
  }

  static async listCategoriesRecipes() {
    const res = await request.get(`/categories?type=${RECIPES}`)

    return res.data
  }
}

export {
  CategoriesController
}