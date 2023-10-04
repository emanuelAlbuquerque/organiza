import { EXPENSE } from '@/constants/type'
import { parseDateFromDDMMYYYY } from '@/services/dates'

const AccordionItemContentRecentMovements = props => {
  return (
    <>
      <h1 className="mb-6 text-xl uppercase text-dark-title font-medium">
        Recentes
      </h1>
      {
        props.moviments?.length === 0 ? (
          <p className="text-sm text-gray-subtitle text-center pb-4">
          Você não possui nenhuma conta para pagar ou receber!
        </p>
        ) : (
            props.moviments?.map(moviment => (
            <div className="border-b-1 border-gray-200 last:border-none" key={moviment.id}>
              <div className="flex justify-between items-center p-3 rounded-xl">
                <div>
                    <p className="text-dark-title">{ moviment.description }</p>
                    <p className="text-sm text-gray-subtitle">{ parseDateFromDDMMYYYY(moviment.date) }</p>
                </div>
                <div className="flex items-center gap-4">
                  <p
                    className={`${
                      moviment.type === EXPENSE
                        ? 'text-danger-400'
                        : 'text-success-600'
                    } font-semibold`}
                  >
                    {`${moviment.type === EXPENSE ? '-' : '+'} R$ ${moviment.price}`}
                  </p>
                </div>
              </div>
            </div>
          ))
        )
      }
    </>
  )
}

export { AccordionItemContentRecentMovements }
