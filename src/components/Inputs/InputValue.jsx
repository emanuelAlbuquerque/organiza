import { Input } from '@nextui-org/react'

const InputValue = (props) => {
  return (
    <Input
      type="number"
      variant={props.variant}
      placeholder="0.00"
      label={props.label}
      value={props.value}
      onChange={props.handleOnChange}
      labelPlacement="outside"
      startContent={
        <div className="pointer-events-none flex items-center">
          <span className="text-default-400 text-small">R$:</span>
        </div>
      }
    />
  )
}

export {
  InputValue
}
