import { Input } from '@nextui-org/react'

const InputText = (props) => {
  return (
    <Input
      isClearable
      type="text"
      label={props.label}
      variant="underlined"
      className="w-full"
      value={props.value}
      onValueChange={props.handleOnChange}
      isRequired
    />
  )
}

export { InputText }
