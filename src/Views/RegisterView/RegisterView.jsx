import { ActionDanger } from '@/components/ActionsNotifications/ActionDanger'
import { ActionSuccess } from '@/components/ActionsNotifications/ActionSucess'
import { ButtonSpinner } from '@/components/Buttons/ButtonSpiner'
import { InputEmail } from '@/components/Inputs/InputEmail'
import { InputPassword } from '@/components/Inputs/InputPassword'
import { InputTel } from '@/components/Inputs/InputTel'
import { InputText } from '@/components/Inputs/InputText'
import { UserController } from '@/controllers/user'
import { ID } from '@/services/generateUUID'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { NotificationAction } from '@/services/notifications'
import { NotificationContainer } from 'react-notifications'

const RegisterView = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ message: '', type: '' })
  const router = useRouter()

  async function handleOnSubmitRegisterUser(e) {
    e.preventDefault()
    setLoading(true)

    const error = validate()
  
    if (!error) {
      try {
        const userByEmail = await UserController.getUserByEmail(email)
  
        if (!userByEmail) {
          const user = {
            id: ID(),
            name,
            email,
            password
          }
  
          const userResponse = await UserController.registerUser(user)
  
          if (userResponse) {
            NotificationAction.notificationSucesss('Usuário cadastrado com sucesso. Aguarde o login.')
  
            const res = await signIn('credentials', {
              email: userResponse.email,
              password: userResponse.password,
              redirect: false
            })
  
            if (res.error) {
              NotificationAction.notificationError('Erro ao realizar o login. Aguarde um momento.')
              setLoading(false)
              return null
            }
  
            router.push('/')
          } else {
            NotificationAction.notificationError('Erro ao cadastrar o usuário.')
          }
        } else {
          NotificationAction.notificationError('O email informado já está cadastrado.')
        }
      } catch (error) {
        NotificationAction.notificationError('Erro ao cadastrar o usuário.' + error.message)
      }
    }

    setLoading(false)
  }

  function handleOnChangeSetEmail(e) {
    setEmail(e)
  }

  function handleOnChangeSetName(e) {
    setName(e)
  }

  function handleOnChangeSetPassword(e) {
    setPassword(e)
  }

  const validate = () => {
    if (!password || !email || !name) {
      NotificationAction.notificationWarning('Informe todos os campos.')
      return true
    }

    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/)) {
      NotificationAction.notificationError('Email inválido.')
      return true
    }

    if (!password.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)) {
      NotificationAction.notificationError('Senha inválida.')
      return true
    }

    return false

  }

  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full max-w-lg px-6 py-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl text-blue-800 font-bold mb-4 text-center">
          Faça o seu cadastro!
        </h2>

        <form action="" onSubmit={handleOnSubmitRegisterUser}>
          <InputText
            value={name}
            handleOnChange={handleOnChangeSetName}
            label="Nome"
          />
          <InputEmail value={email} handleOnChange={handleOnChangeSetEmail} />
          <InputPassword
            value={password}
            handleOnChange={handleOnChangeSetPassword}
            isValidation
          />

          <ButtonSpinner
            onSubimit={handleOnSubmitRegisterUser}
            loading={loading}
            type={'submit'}
          >
            Cadastrar
          </ButtonSpinner>
        </form>
      </div>

      <NotificationContainer />
    </div>
  )
}

export { RegisterView }
