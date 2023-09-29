import React, { useMemo, useState } from 'react'
import { Input } from '@nextui-org/react'
import { EyeFilledIcon } from '../Icons/EyeFilledIcon'
import { EyeSlashFilledIcon } from '../Icons/EyeSlashFilledIcon'

export function InputPassword(props) {
  const [isVisible, setIsVisible] = useState(false)
  const [strongPasswordRequirements, setStrongPasswordRequirements] = useState([
    {
      requeriment: 'Pelo menos 8 caracteres',
      fulfilled: false
    },
    {
      requeriment: 'Pelo menos uma letra maiúscula',
      fulfilled: false
    },
    {
      requeriment: 'Pelo menos uma letra minúscula',
      fulfilled: false
    },
    {
      requeriment: 'Pelo menos um número',
      fulfilled: false
    },
    {
      requeriment: 'Pelo menos um caractere especial',
      fulfilled: false
    }
  ])

  const validatePassword = value =>
    value.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
    )

  const isInvalid = useMemo(() => {
    if (props.value === '') return false
    return validatePassword(props.value) ? false : true
  }, [props.value])

  function handleOnChangeCheckPassword(e) {
    const currentPassword = e
    props.handleOnChange(currentPassword)

    const testRequirements = [
      currentPassword.length >= 8,
      /[A-Z]/.test(currentPassword),
      /[a-z]/.test(currentPassword),
      /\d/.test(currentPassword),
      /[^A-Za-z0-9]/.test(currentPassword)
    ]

    const updateRequirements = strongPasswordRequirements.map(
      (requirement, index) => ({
        requeriment: requirement.requeriment,
        fulfilled: testRequirements[index]
      })
    )

    setStrongPasswordRequirements(updateRequirements)
  }

  const toggleVisibility = () => setIsVisible(!isVisible)

  return (
    <>
      <Input
        label="Senha"
        variant="underlined"
        endContent={
          props.value.length > 0 ? (
            <button
              className="focus:outline-none"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              ) : (
                <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
              )}
            </button>
          ) : (
            <></>
          )
        }
        type={isVisible ? 'text' : 'password'}
        className="w-full"
        value={props.value}
        onValueChange={handleOnChangeCheckPassword}
        isInvalid={isInvalid}
        errorMessage={
          isInvalid &&
          'Informe uma senha válida. Que cumpra todos os requisitos!'
        }
        isRequired
      />

      {props.value.length > 0 ? (
        <div className="mt-1">
          <ul>
            {strongPasswordRequirements.map(requeriment => (
              <li
                className={`${
                  requeriment.fulfilled ? 'text-success' : 'text-danger'
                } text-xs`}
              >
                {' '}
                {`* ${requeriment.requeriment}`}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </>
  )
}
