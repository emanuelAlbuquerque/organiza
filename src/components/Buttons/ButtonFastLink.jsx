import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon } from '@heroicons/react/24/outline'

export const ButtonFastLink = props => {
  return (
    <button onClick={props.handleOnClick} onPress={props.onPress} className='border-none bg-transparent flex flex-col justify-center items-center'>
      {props.type === 'receita' ? (
        <>
          <PlusCircleIcon className="text-success-400 w-16 m-0" />
          <p>RECEITA</p>
        </>
      ) : (
        <>
          <MinusCircleIcon className="text-danger-400 w-16 m-0" />
          <p>DESPESA</p>
        </>
      )}
    </button>
  )
}
