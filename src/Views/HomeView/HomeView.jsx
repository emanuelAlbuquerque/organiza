import { AccordionComponent } from '@/components/Accordion/Accordion'
import { ButtonFastLink } from '@/components/Buttons/ButtonFastLink'
import { Container } from '@/components/Container/Container'
import { FinanceStatus } from '@/components/FinanceStatus/FinanceStatus'
import { CreateExpenseModal } from '@/components/Modals/CreateExpanseModal'
import { CreateRecipeModal } from '@/components/Modals/CreateRecipeModal'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react'
import { MovimentsController } from '@/controllers/MovimentsController'
import { Loader } from '@/components/Loader/Loader'
import { getMoneyTotalResp, statusMoney } from '@/services/moviments'
import { NotificationAction } from '@/services/notifications'
import { CategoriesController } from '@/controllers/CategoriesController'

export const HomeView = () => {
  const { data: session } = useSession()
  const [isCreateRecipeModalOpen, setCreateRecipeModalOpen] = useState(false)
  const [isCreateExpanseModalOpen, setCreateExpanseModalOpen] = useState(false)

  const [expensesPaymentaWaiting, setExpensesPaymentaWaiting] = useState([])
  const [recipesReceiveWating, setRecipesReceiveWating] = useState([])
  const [movimentsRecent, setMovimentsRecent] = useState()

  const [moneyTotalExpanse, setMoneyTotalExpanse] = useState(0)
  const [moneyTotalRecipe, setMoneyTotalRecipe] = useState(0)
  const [moneyTotal, setMoneyTotal] = useState(0)

  const [limits, setLimits] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    initComponent()
  }, [])

  async function initComponent() {
    setLoading(true)
    await listExpensesPaymentWaitingByMonth()
    await listRecipesReceiveWaitingByMonth()
    await listExpensesPaymentByMonth()
    await listRecipesReceivedByMonth()
    await getTotalMoney()
    await listRecentMoviments()
    await listLimits()
    higherExpensesByMonth()
    setLoading(false)
  }

  async function listExpensesPaymentWaitingByMonth() {
    const res = await MovimentsController.listExpensesPaymentWaitingByMonth()

    setExpensesPaymentaWaiting(res)
  }

  async function listRecipesReceiveWaitingByMonth() {
    const res = await MovimentsController.listRecipesReceiveWaitingByMonth()

    setRecipesReceiveWating(res)
  }

  async function listRecentMoviments() {
    const res = await MovimentsController.listMovimentsRecents()

    setMovimentsRecent(res)
  }

  async function listExpensesPaymentByMonth() {
    const res = await MovimentsController.listExpensesPaymentByMonth()

    const valueTotal = res.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    )

    setMoneyTotalExpanse(valueTotal)
  }

  async function listRecipesReceivedByMonth() {
    const res = await MovimentsController.listRecipesReceivedByMonth()

    const valueTotal = res.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    )

    setMoneyTotalRecipe(valueTotal)
  }

  async function listLimits() {
    const res = await CategoriesController.listLimits()

    setLimits(res)
  }

  async function getTotalMoney() {
    const moneyTotal = await getMoneyTotalResp()

    statusMoney(moneyTotal)

    setMoneyTotal(moneyTotal)
  }

  async function higherExpensesByMonth() {
    const res = await MovimentsController.higherExpensesByMonth()
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
        <>
          <div className="w-full p-8 grid sm:grid-cols-2 grid-cols-1 bg-white shadow-xl rounded-lg">
            <div className="">
              <div className="w-full mb-4">
                <p>Boa Noite,</p>
                <p className="font-bold text-2xl">{session?.user.name} !</p>
              </div>
              <div className="w-full flex items-center gap-4 justify-between">
                <FinanceStatus
                  title={'Despesa'}
                  value={moneyTotalExpanse}
                  type={'despesa'}
                />
                <FinanceStatus
                  title={'Receita'}
                  value={moneyTotalRecipe}
                  type={'receita'}
                />
              </div>
            </div>
            <div className="sm:ps-8 flex flex-col justify-between items-center sm:items-start mt-5 sm:mt-5">
              <h1 className="font-bold text-xl mt-2">Acesso Rapido</h1>
              <div className="flex items-end gap-4">
                <ButtonFastLink
                  type="receita"
                  handleOnClick={openCreateRecipeModal}
                />
                <ButtonFastLink
                  type="despesa"
                  handleOnClick={openCreateExpanseModal}
                />
              </div>
            </div>
          </div>

          <div className="mt-6">
            <AccordionComponent
              expensesPaymentaWaiting={expensesPaymentaWaiting}
              recipesReceiveWating={recipesReceiveWating}
              movimentsRecents={movimentsRecent}
              moneyTotal={moneyTotal}
              limits={limits}
              callback={initComponent}
            />
          </div>

          <CreateRecipeModal
            isOpen={isCreateRecipeModalOpen}
            onOpenChange={closeModals}
            callback={initComponent}
          />
          <CreateExpenseModal
            isOpen={isCreateExpanseModalOpen}
            onOpenChange={closeModals}
            callback={initComponent}
          />
        </>
      )}
    </Container>
  )
}
