import { ButtonLink } from '@/components/Buttons/ButtonLink'
import { InputEmail } from '@/components/Inputs/InputEmail'
import { InputPassword } from '@/components/Inputs/InputPassword'
import { InputTel } from '@/components/Inputs/InputTel'
import { InputText } from '@/components/Inputs/InputText'
import { Input, Button } from '@nextui-org/react'
import { useState } from 'react'

const RegisterView = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [tel, setTel] = useState('')

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

        <form action="">
          <InputText value={name} handleOnChange={handleOnChangeSetName} label="Nome"/>
          <InputEmail value={email} handleOnChange={handleOnChangeSetEmail} />
          <InputPassword value={password} handleOnChange={handleOnChangeSetPassword} />
          <InputTel value={tel} handleOnChange={handleOnChangeSetTel}/>

          <Button
            isLoading={false}
            className="w-full mt-5 bg-blue-800 text-white font-bold"
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
            Cadastrar
          </Button>
        </form>
      </div>
    </div>
  )
}

export {
  RegisterView
}
