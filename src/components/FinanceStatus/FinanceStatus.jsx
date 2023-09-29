export const FinanceStatus = props => {
  return (
    <div className={`w-full text-center p-2 rounded-lg ${props.type === 'despesa' ? 'bg-danger-50' : 'bg-success-50'}`}>
      <p className="">{ props.title }</p>
      <p className={`${props.type === 'despesa' ? 'text-danger-400' : 'text-success-500'} font-semibold`}>R$ {props.value}</p>
    </div>
  )
}
