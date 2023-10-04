import request from '@/services/axios'
import { ID } from '@/services/generateUUID'

class UserController {
  static async getUserByEmail(email) {
    try {
      const data = await request.get(`/users?email=${email}`)

      const user = data.data[0]

      if (user) {
        return user
      }

      return null
    } catch (error) {
      throw new Error('Erro no servidor!')
    }
  }

  static async registerUser(user) {
    try {
      const res = await request.post('/users', {
        id: ID(),
        name: user.name,
        email: user.email,
        password: user.password
      })

      const userResponse = res.data

      if (userResponse) {
        return userResponse
      }

      return null
    } catch (error) {
      throw new Error('Erro no servidor!')
    }
  }
}

export {
  UserController
}