import { parceValueToBRL, parsePorcentage } from '@/services/format'
import { CircularProgress } from '@nextui-org/react'

const AccordionItemContentSpendingLimit = (props) => {
  return (
    props.limits.map((limit) => (
      <div className="border-b-1 border-gray-200 last:border-none">
        <div className="flex justify-between items-center p-3 px-0 rounded-xl">
          <div className="flex items-center gap-3">
            <CircularProgress
              aria-label="Loading..."
              size="lg"
              value={limit.spending}
              maxValue={limit.limit}
              color='primary'
            />
            <div>
              <p className="text-dark-title">Alimentação</p>
              <p className='text-gray-subtitle text-sm'>Meta: <span>{parceValueToBRL(limit.limit)}</span></p>
              <p className='text-gray-subtitle text-sm'>Gasto: <span>{ parceValueToBRL(limit.spending) }</span></p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <p>{parsePorcentage(limit.spending, limit.limit).toFixed(2)} %</p>
          </div>
        </div>
      </div>
    ))
  )
}

export { AccordionItemContentSpendingLimit }
