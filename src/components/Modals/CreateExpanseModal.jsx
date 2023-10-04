import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  Input
} from '@nextui-org/react'
import { SelectInput } from '../Inputs/SelectInput'
import { useEffect, useState } from 'react'
import { CategoriesController } from '@/controllers/CategoriesController'
import { InputValue } from '../Inputs/InputValue'
import { compareDates, currentDate, getCurrentDateTime } from '@/services/dates'
import {
  A_PAGAR,
  A_RECEBER,
  IS_AFTER,
  PAGO,
  RECEBIDO
} from '@/constants/status'
import { EXPENSE, RECIPES } from '@/constants/type'
import { ID } from '@/services/generateUUID'
import { MovimentsController } from '@/controllers/MovimentsController'
import { NotificationAction } from '@/services/notifications'
import { InputDate } from '../Inputs/InputDate'
import { getMoneyTotalResp, statusLimit } from '@/services/moviments'
import { LimitController } from '@/controllers/LimitController'

const CreateExpenseModal = props => {
  const [categories, setCategories] = useState()
  const [expense, setExpense] = useState({
    description: '',
    value: 0,
    date: getCurrentDateTime(),
    category: ''
  })

  useEffect(() => {
    listCategories()
  }, [])

  async function listCategories() {
    const res = await CategoriesController.listCategoriesExpenses()

    setCategories(res)
  }

  function handleOnChange(e) {
    setExpense(prev => ({ ...prev, value: e.target.value }))
  }

  function handleOnChangeCategory(e) {
    setExpense(prev => ({ ...prev, category: e.target.value }))
  }

  function handleOnChangeSetDate(e) {
    setExpense(prev => ({...prev, date: e.target.value}))
  }

  async function createRecipe(e) {
    e.preventDefault()

    const expenseRequest = {
      id: ID(),
      description: expense.description.trim(),
      price: parseFloat(expense.value),
      date: new Date(expense.date),
      status: compareDates(expense.date) === IS_AFTER ? A_PAGAR : PAGO,
      type: EXPENSE,
      category: expense.category
    }

    const res = await MovimentsController.createExpense(expenseRequest)

    if (res) {
      NotificationAction.notificationSucesss('Despesa Cadastrada')
      const resLimit = await LimitController.updateSpending(res.category, res.price)
      statusLimit(resLimit)
      await props.callback()

      props.onOpenChange()
    } else {
      NotificationAction.notificationError('Erro as cadastrar a receita!')
    }
  }

  return (
    <Modal
      isOpen={props.isOpen}
      onOpenChange={props.onOpenChange}
      placement="top"
      backdrop="blur"
    >
      <ModalContent>
        {onClose => (
          <>
            <ModalHeader className="flex flex-col gap-1">
              Nova Despesa
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Descrição"
                variant="bordered"
                value={expense.description}
                onChange={e =>
                  setExpense(prev => ({ ...prev, description: e.target.value }))
                }
              />
              <div className="flex items-center gap-4">
                <InputValue
                  label="Valor"
                  variant="bordered"
                  value={expense.value}
                  handleOnChange={handleOnChange}
                  className="w-1/2"
                />
                <InputDate value={expense.date} handleOnChange={handleOnChangeSetDate} />
              </div>

              <div className="flex items-center gap-4">
                <SelectInput
                  label="Categoria"
                  placeholder="Selecione uma Categoria"
                  listItems={categories}
                  handleOnChange={handleOnChangeCategory}
                />
              </div>
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose}>
                Cancelar
              </Button>
              <Button
                onClick={e => createRecipe(e)}
                className="bg-blue-700 text-white font-semibold"
              >
                Adicionar
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}

export { CreateExpenseModal }
