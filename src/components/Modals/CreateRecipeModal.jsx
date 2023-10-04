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
import { A_RECEBER, IS_AFTER, RECEBIDO } from '@/constants/status'
import { RECIPES } from '@/constants/type'
import { ID } from '@/services/generateUUID'
import { MovimentsController } from '@/controllers/MovimentsController'
import { NotificationAction } from '@/services/notifications'
import { InputDate } from '../Inputs/InputDate'
import { LimitController } from '@/controllers/LimitController'

const CreateRecipeModal = props => {
  const [categories, setCategories] = useState()
  const [recipe, setRecipe] = useState({
    description: '',
    value: 0,
    date: getCurrentDateTime(),
    category: ''
  })
  const [error, setError] = useState('')

  useEffect(() => {
    listCategories()
  }, [])

  async function listCategories() {
    const res = await CategoriesController.listCategoriesRecipes()

    setCategories(res)
  }

  function handleOnChange(e) {
    setRecipe(prev => ({ ...prev, value: e.target.value }))
  }

  function handleOnChangeCategory(e) {
    setRecipe(prev => ({ ...prev, category: e.target.value }))
  }

  function handleOnChangeSetDate(e) {
    setRecipe(prev => ({...prev, date: e.target.value}))
  }

  async function createRecipe(e) {
    e.preventDefault()

    const recipeRequest = {
      id: ID(),
      description: recipe.description.trim(),
      price: parseFloat(recipe.value),
      date: new Date(recipe.date),
      status: compareDates(recipe.date) === IS_AFTER ? A_RECEBER : RECEBIDO,
      type: RECIPES,
      category: recipe.category
    }

    const res = await MovimentsController.createRecipe(recipeRequest)
    
    if (res) {
      NotificationAction.notificationSucesss('Receita Cadastrada')
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
              Nova Receita
            </ModalHeader>
            <ModalBody>
              <Input
                autoFocus
                label="Descrição"
                variant="bordered"
                value={recipe.description}
                onChange={e =>
                  setRecipe(prev => ({ ...prev, description: e.target.value }))
                }
              />
              <div className="flex items-center gap-4">
                <InputValue
                  label="Valor"
                  variant="bordered"
                  value={recipe.value}
                  handleOnChange={handleOnChange}
                />
                <InputDate value={recipe.date} handleOnChange={handleOnChangeSetDate} />
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

export { CreateRecipeModal }
