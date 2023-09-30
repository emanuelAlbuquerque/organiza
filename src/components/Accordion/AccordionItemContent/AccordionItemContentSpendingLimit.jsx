import { CircularProgress } from '@nextui-org/react'

const AccordionItemContentSpendingLimit = () => {
  return (
    <div className="border-b-1 border-gray-200 last:border-none">
      <div className="flex justify-between items-center p-3 px-0 rounded-xl">
        <div className="flex items-center gap-3">
          <CircularProgress
            aria-label="Loading..."
            size="lg"
            value={30}
            color="warning"
          />
          <div>
            <p className="text-dark-title">Alimentação</p>
            <p className='text-gray-subtitle text-sm'>Meta: <span>R$ 30,00</span></p>
            <p className='text-gray-subtitle text-sm'>Gasto: <span>R$ 10,00</span></p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <p>{50} %</p>
        </div>
      </div>
    </div>
  )
}

export { AccordionItemContentSpendingLimit }
