import { PlusCircleIcon } from '@heroicons/react/24/outline'
import { MinusCircleIcon } from '@heroicons/react/24/outline'

export const ButtonFastLink = props => {
  return (
    <button onClick={props.handleOnClick} className='border-none bg-transparent'>
      {props.type === 'receita' ? (
        <>
          <PlusCircleIcon className="text-success-400 w-16" />
          <p>RECEITA</p>
        </>
      ) : (
        <>
          <MinusCircleIcon className="text-danger-400 w-16" />
          <p>DESPESA</p>
        </>
      )}
    </button>
  )
}
