import { Container } from '@/components/Container/Container'
import { DropdownButton } from '@/components/DropDowns/DropdownButton'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'
import { SearchIcon } from '@/components/Icons/SearchIcon'
import { MovimentsController } from '@/controllers/MovimentsController'
import { Button, CheckboxGroup, Divider } from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { ListMoviments } from './components/ListMovments'
import { EXPENSE, RECIPES } from '@/constants/type'
import { NotificationAction } from '@/services/notifications'
import { Loader } from '@/components/Loader/Loader'
import { CreateRecipeModal } from '@/components/Modals/CreateRecipeModal'
import { CreateExpenseModal } from '@/components/Modals/CreateExpanseModal'

export const ReleasesView = () => {
  const [moviments, setMoviments] = useState()
  const [loading, setLoading] = useState(false)
  const [isCreateRecipeModalOpen, setCreateRecipeModalOpen] = useState(false)
  const [isCreateExpanseModalOpen, setCreateExpanseModalOpen] = useState(false)
  const [value, setValue] = useState('')

  useEffect(() => {
    listMoviments()
  }, [])

  const listMoviments = async (status, types) => {
    setLoading(true)
    const res = await MovimentsController.listMoviments(status, types)

    setMoviments(res)
    setLoading(false)
  }

  async function payOrReveived(e, account) {
    e.preventDefault()

    if (account.type === RECIPES) {
      await MovimentsController.receivePayment(account)

      NotificationAction.notificationSucesss('Receita Recebida.')

      listMoviments()
    }

    if (account.type === EXPENSE) {
      await MovimentsController.payBill(account)

      NotificationAction.notificationSucesss('Despesa Paga.')

      listMoviments()
    }
  }

  const openCreateRecipeModal = () => {
    setCreateRecipeModalOpen(true)
  }

  const openCreateExpanseModal = () => {
    setCreateExpanseModalOpen(true)
  }

  const closeModals = () => {
    setCreateRecipeModalOpen(false)
    setCreateExpanseModalOpen(false)
  }

  return (
    <Container>
      {loading ? (
        <Loader message="Carregando..." />
      ) : (
        <div className="w-full p-8 bg-white h- shadow-xl rounded-lg ">
          <div className="flex items-center gap-4">
            <HeaderContainer title={'Receitas e Despesas'} />
            <DropdownButton
              openCreateRecipeModal={openCreateRecipeModal}
              openCreateExpanseModal={openCreateExpanseModal}
            />
          </div>

          <div className="mt-5">
            <Input
              type="text"
              label="Pesquise o que deseja"
              placeholder="Pesquise..."
              labelPlacement="outside"
              value={value}
              onChange={e => setValue(e.target.value.toLowerCase())}
              startContent={<SearchIcon />}
            />
          </div>

          <div className="mt-4">
            <ListMoviments
              moviments={moviments}
              payOrReveived={payOrReveived}
              value={value}
            />
          </div>
          {/* <div className="flex items-center justify-between">
            <div>
              <p className="= items-left justify-start text-md font-black">
                {' '}
                Vamos Lá! , ...
              </p>
              <p className="">
                Clique no botão + e comece a fazer seus lançamentos
              </p>
            </div>
            <img
              src="http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
              alt=""
              style={{ maxWidth: '55%', height: 'auto' }}
            />
          </div> */}
        </div>
      )}

      <CreateRecipeModal
        isOpen={isCreateRecipeModalOpen}
        onOpenChange={closeModals}
        callback={listMoviments}
      />
      <CreateExpenseModal
        isOpen={isCreateExpanseModalOpen}
        onOpenChange={closeModals}
        callback={listMoviments}
      />
    </Container>
  )
}
