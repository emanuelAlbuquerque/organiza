const AccordionItemContentRecentMovements = props => {
  return (
    <>
      <h1 className="mb-6 text-xl uppercase text-dark-title font-medium">
        Recentes
      </h1>
      <div className="border-b-1 border-gray-200 last:border-none">
        <div className="flex justify-between items-center p-3 rounded-xl">
          <div>
            <p className="text-dark-title">{'Compra de Comida'}</p>
            <p className="text-sm text-gray-subtitle">{'03/05/2023'}</p>
          </div>
          <div className="flex items-center gap-4">
            <p
              className={`${
                props.type === 'expense'
                  ? 'text-danger-400'
                  : 'text-success-600'
              } font-semibold`}
            >
              {`${props.type === 'expense' ? '-' : '+'} R$ ${props.value}`}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export { AccordionItemContentRecentMovements }
