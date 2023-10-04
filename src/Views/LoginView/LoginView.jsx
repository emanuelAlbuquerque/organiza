import { ButtonLink } from '@/components/Buttons/ButtonLink'
import { InputEmail } from '@/components/Inputs/InputEmail'
import { InputPassword } from '@/components/Inputs/InputPassword'
import { useRouter } from 'next/router'
import { useState } from 'react'
import {signIn} from 'next-auth/react'
import { ButtonSpinner } from '@/components/Buttons/ButtonSpiner'
import { ActionDanger } from '@/components/ActionsNotifications/ActionDanger'


const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  function redirectRegisterView(e) {
    e.preventDefault()

    router.push({
      pathname: '/register'
    })
  }

  async function handleOnSubmit(e) {
    e.preventDefault()
    setError(false)
    setLoading(true)

    try {
      const res = await signIn('credentials', {
        email, password, redirect: false
      })

      if (res.error) {
        setError('Credenciais Inválidas')
        setLoading(false)
        return
      }

      router.push('/')
    } catch (error) {
      setLoading(false)
      setError('Credenciais Inválidas')
    }
  }
  
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full max-w-lg px-6 py-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl text-center text-blue-800 font-bold mb-4">
          Acesse a sua Conta
        </h2>

        <form action="" onSubmit={handleOnSubmit}>
          <InputEmail value={email} handleOnChange={(e) => setEmail(e)} />

          <InputPassword value={password} handleOnChange={(e) => setPassword(e)} isValidation={false} className="mb-6" />

          {
            error && (
              <div className='w-full mt-3'>
                <ActionDanger error={error} />
              </div>
            )
          }          

          <div className="flex justify-between items-center px-7 mt-6">
            <ButtonLink text={'Esqueci a senha'} />

            <ButtonLink text={'Cadastra-se'} handleOnClick={ redirectRegisterView  } />
          </div>

          <ButtonSpinner loading={loading} type="submit" onSubmit={handleOnSubmit}>
            Entrar
          </ButtonSpinner>
        </form>
      </div>
    </div>
  )
}

export {
  LoginView
}