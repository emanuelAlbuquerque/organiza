import { EXPENSE, RECIPES } from '@/constants/type'
import { MovimentsController } from '@/controllers/MovimentsController'
import { parseDateFromDDMMYYYY } from '@/services/dates'
import { parceValueToBRL } from '@/services/format'
import { NotificationAction } from '@/services/notifications'
import { Button } from '@nextui-org/react'

const AccordionItemContentAccount = props => {

  async function payOrReveived(e, account) {
    e.preventDefault()

    if (account.type === RECIPES) {
      await MovimentsController.receivePayment(account)
      
      NotificationAction.notificationSucesss('Receita Recebida.')

      props.callback()
    }

    if (account.type === EXPENSE) {
      await MovimentsController.payBill(account)
      
      NotificationAction.notificationSucesss('Despesa Paga.')

      props.callback()
    }
  }

  return (
    <>
      {props.accounts.length === 0 ? (
        <p className="text-sm text-gray-subtitle text-center pb-4">
          Você não possui nenhuma conta para pagar ou receber!
        </p>
      ) : (
        props.accounts.map(value => (
          <div
            className="border-b-1 border-gray-200 last:border-none"
            key={value.id}
          >
            <div className="flex justify-between items-center p-3 rounded-xl">
              <div>
                <p className="text-dark-title">{value.description}</p>
                <p className="text-sm text-gray-subtitle">
                  {parseDateFromDDMMYYYY(value.date)}
                </p>
              </div>
              <div className="flex items-center gap-4">
                <p
                  className={`${
                    value.type === 'expenses'
                      ? 'text-danger-400'
                      : 'text-success-600'
                  } font-semibold`}
                >
                  {parceValueToBRL(value.price)}
                </p>
                <Button
                  variant="flat"
                  size={'sm'}
                  onClick={(e) => payOrReveived(e, value)}
                  className={`${
                    value.type === 'expenses'
                      ? 'bg-danger-50 text-danger-600'
                      : 'bg-success-50 text-success-700'
                  }`}
                >
                  {`${value.type === 'expenses' ? 'Pagar' : 'Receber'}`}
                </Button>
              </div>
            </div>
          </div>
        ))
      )}
    </>
  )
}

export { AccordionItemContentAccount }
