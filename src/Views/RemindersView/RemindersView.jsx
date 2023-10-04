import { Container } from '@/components/Container/Container'
import { DeleteIcon } from '@/components/Icons/DeleteIcon'
import { EditIcon } from '@/components/Icons/EditIcon'
import { EyeIcon } from '@/components/Icons/EyeIcon'
import { PlusIcon } from '@/components/Icons/Plus'
import { ModalReminders } from '@/components/Modals/ModalReminders'
import { Button, Tooltip } from '@nextui-org/react'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { useState } from 'react'

const RemindersView = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const onOpen = () => {
    setIsOpenModal(true)
  }

  const onClose = () => {
    setIsOpenModal(false)
  }

  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg">
        <div className="w-full flex items-center justify-between">
          <h1 className="font-bold text-xl">Lembretes</h1>
          <Button onPress={onOpen}
            startContent={<PlusIcon />}
            className="p-6 bg-success-50 text-success-700"
          >
            Novo Lembrete
          </Button>
        </div>
        <div className="mt-8">
          <Table removeWrapper aria-label="Example static collection table">
            <TableHeader>
              <TableColumn className='w-2/4'>Descrição</TableColumn>
              <TableColumn className='w-1/4'>Data</TableColumn>
              <TableColumn className='text-center w-1/4'>Ações</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Pagamento do Cartão</TableCell>
                <TableCell>13/09/2023</TableCell>
                <TableCell>
                  <div className="relative flex items-center gap-2 justify-center">
                    <Tooltip content="Details">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EyeIcon />
                      </span>
                    </Tooltip>
                    <Tooltip content="Edit user">
                      <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
                        <EditIcon />
                      </span>
                    </Tooltip>
                    <Tooltip color="danger" content="Delete user">
                      <span className="text-lg text-danger cursor-pointer active:opacity-50">
                        <DeleteIcon />
                      </span>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>

      <ModalReminders isOpen={isOpenModal} onOpenChange={onClose}/>
    </Container>
  )
}

export { RemindersView }
