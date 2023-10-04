import { Input } from '@nextui-org/react'
import { useMemo, useState } from 'react'

const InputEmail = (props) => {
  const validateEmail = (value) => value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,3}$/)

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
