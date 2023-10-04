import { A_PAGAR, A_RECEBER } from '@/constants/status'
import { parseDateFromDDMMYYYY } from '@/services/dates'
import { parceValueToBRL } from '@/services/format'

const { BadgeColor } = require('@/components/BadgeColor')
const { Button } = require('@nextui-org/react')

const ListMoviments = props => {
  return props.moviments?.filter((moviment) => moviment.description.toLowerCase().includes(props.value)).map(moviment => (
    <button key={moviment.id} className="w-full flex items-center justify-between p-3 hover:bg-slate-100 transition-background rounded-lg">
      <div className="text-start">
        <p className="text-dark-title">{moviment.description}</p>
        <p className="text-sm text-gray-subtitle">
          {parseDateFromDDMMYYYY(moviment.date)}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <p
          className={`${
            moviment.type === 'expenses'
              ? 'text-danger-400'
              : 'text-success-600'
          } font-semibold`}
        >
          {parceValueToBRL(moviment.price)}
        </p>
        {moviment.status === A_PAGAR ||
          (moviment.status === A_RECEBER && (
            <Button
              variant="flat"
              size={'sm'}
              onClick={e => props.payOrReveived(e, moviment)}
              className={`${
                moviment.type === 'expenses'
                  ? 'bg-danger-50 text-danger-600'
                  : 'bg-success-50 text-success-700'
              }`}
            >
              {`${moviment.type === 'expenses' ? 'Pagar' : 'Receber'}`}
            </Button>
          ))}
      </div>
    </button>
  ))
}

export { ListMoviments }
