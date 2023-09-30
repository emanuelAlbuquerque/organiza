import { Button } from '@nextui-org/react'

const AccordionItemContentAccount = props => {
  return props.accounts.map(value => (
    <div className="border-b-1 border-gray-200 last:border-none">
      <div className="flex justify-between items-center p-3 rounded-xl">
        <div>
          <p className="text-dark-title">{value.title}</p>
          <p className="text-sm text-gray-subtitle">{value.description}</p>
        </div>
        <div className="flex items-center gap-4">
          <p
            className={`${
              value.type === 'pay' ? 'text-danger-400' : 'text-success-600'
            } font-semibold`}
          >
            R$ {value.value}
          </p>
          <Button
            variant="flat"
            size={'sm'}
            className={`${
              value.type === 'pay'
                ? 'bg-danger-50 text-danger-600'
                : 'bg-success-50 text-success-700'
            }`}
          >
            {`${value.type === 'pay' ? 'Pagar' : 'Cobrar'}`}
          </Button>
        </div>
      </div>
    </div>
  ))
}

export { AccordionItemContentAccount }
