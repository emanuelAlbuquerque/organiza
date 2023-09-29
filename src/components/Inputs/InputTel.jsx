import { Input } from '@nextui-org/react'

export const InputTel = props => {

  function masked(e) {
    const numeros = e.replace(/\D/g, '');
    let mascara = '';

    if (numeros.length >= 2) {
      mascara += `(${numeros.substring(0, 2)}) `;
    }

    if (numeros.length > 2) {
      mascara += `${numeros.substring(2, 7)}-`;
    }

    if (numeros.length > 7) {
      mascara += numeros.substring(7, 11);
    }

    props.handleOnChange(mascara)
  }

  function handleOnChangeSetTel(e) {
    console.log(e)
    masked(e)
  }

  return (
    <Input
      isClearable
      type="text"
      label={"Telefone"}
      variant="underlined"
      className="w-full"
      value={props.value}
      onValueChange={handleOnChangeSetTel}
      isRequired
    />
  )
}
