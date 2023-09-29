import { Input } from '@nextui-org/react'
import { useMemo, useState } from 'react'

const InputEmail = (props) => {
  const validateEmail = (value) => value.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i)

  const isInvalid = useMemo(() => {
    if (props.value === '') return false
    return validateEmail(props.value) ? false : true
  }, [props.value])

  return (
    <Input
      isClearable
      type="email"
      label="Email"
      variant="underlined"
      placeholder='exemplo@gmail.com'
      className="w-full"
      value={props.value}
      isInvalid={isInvalid}
      errorMessage={isInvalid && 'Informe um Email valido.'}
      onValueChange={props.handleOnChange}
      isRequired
    />
  )
}

export { InputEmail }
