import { ButtonLink } from '@/components/Buttons/ButtonLink'
import { InputEmail } from '@/components/Inputs/InputEmail'
import { InputPassword } from '@/components/Inputs/InputPassword'
import { Button } from '@nextui-org/react'
import { useRouter } from 'next/router'
import { useState } from 'react'


const LoginView = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  function redirectRegisterView(e) {
    e.preventDefault()

    router.push({
      pathname: '/register'
    })
  }
  
  return (
    <div className="w-full h-screen flex items-center justify-center flex-col">
      <div className="w-full max-w-lg px-6 py-8 bg-white rounded-2xl shadow-2xl">
        <h2 className="text-2xl text-center text-blue-800 font-bold mb-4">
          Acesse a sua Conta
        </h2>

        <form action="">
          <InputEmail value={email} handleOnChange={(e) => setEmail(e)} />

          <InputPassword value={password} handleOnChange={(e) => setPassword(e)} className="mb-6" />

          <div className="flex justify-between items-center px-7 mt-6">
            <ButtonLink text={'Esqueci a senha'} />

            <ButtonLink text={'Cadastra-se'} handleOnClick={ redirectRegisterView  } />
          </div>

          <Button
            isLoading={false}
            className="w-full block mt-5 bg-blue-800 text-white font-bold"
            type="submit"
            spinner={
              <svg
                className="animate-spin h-5 w-5 text-current"
                fill="none"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <path
                  className="opacity-75"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  )
}

export {
  LoginView
}