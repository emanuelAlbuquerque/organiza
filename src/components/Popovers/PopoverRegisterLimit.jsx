import { LimitController } from '@/controllers/LimitController'
import { NotificationAction } from '@/services/notifications'
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  Input
} from '@nextui-org/react'
import { useState } from 'react'
import { BsPlus, BsPencil } from 'react-icons/bs'

const PopoverRegisterLimit = (props) => {
  const [value, setValue] = useState(props.item.spending)

  function handleOnChangeSetValue(e) {
    setValue(e.target.value)
  }

  async function createOrUpdateLimit() {
    const res = await LimitController.createOrUpdateLimit(props.item, parseFloat(value))

    if (res) {
      NotificationAction.notificationSucesss('Orçamento alterado com sucesso.')
      props.callback()
    } else {
      NotificationAction.notificationError('Erro ao alterar o orçamento.')
    }
  }

  return (
    <Popover placement="bottom" className='bg-white'>
      <PopoverTrigger>
        <button>
          {
            props.item.limit > 0 ? (
              <BsPencil size={11} />
            ) : (
              <BsPlus />
            )
          }
        </button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="py-4 px-2">
          <Input
            type="number"
            placeholder="0.00"
            value={value}
            onChange={handleOnChangeSetValue}
            startContent={
              <div className="pointer-events-none flex items-center">
                <span className="text-default-400 text-small">$</span>
              </div>
            }
          />

          <Button className='bg-blue-800 text-white mt-3 w-full' onClick={createOrUpdateLimit}>
            Cadastrar
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export { PopoverRegisterLimit }
