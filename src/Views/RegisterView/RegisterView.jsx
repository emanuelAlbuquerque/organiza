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

const RegisterView = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState({ message: '', type: '' })
  const router = useRouter()

  async function handleOnSubmitRegisterUser(e) {
    e.preventDefault()
    setLoading(true)

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
          setMessage({
            message: 'Usuário cadastrado com sucesso',
            type: 'success'
          })

          const res = await signIn('credentials', {
            email: userResponse.email + 'jhiho',
            password: userResponse.password,
            redirect: false
          })

          if (res.error) {
            setMessage({
              message: 'Erro ao redirecionar a página, tente fazer o login.',
              type: 'error'
            })
            setLoading(false)
            return null
          }

          router.push('/')
        } else {
          setMessage({
            message: 'Erro ao cadastrar usuário',
            type: 'error'
          })
        }
      } else {
        setMessage({ message: 'O email já está cadastrado', type: 'error' })
      }
    } catch (error) {
      setMessage({
        message: 'Erro ao cadastrar usuário' + error.message,
        type: 'error'
      })
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

  function handleOnChangeSetTel(e) {
    setTel(e)
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
          <InputTel value={tel} handleOnChange={handleOnChangeSetTel} />

          {message.type === 'error' && (
            <div className="w-full mt-3">
              <ActionDanger error={error} />
            </div>
          )}

          {message.type === 'success' && (
            <ActionSuccess message={message.message} />
          )}

          <ButtonSpinner
            onSubimit={handleOnSubmitRegisterUser}
            loading={loading}
            type={'submit'}
          >
            Cadastrar
          </ButtonSpinner>
        </form>
      </div>
    </div>
  )
}

export { RegisterView }
