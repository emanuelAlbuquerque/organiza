const InputDate = props => {
  return (
    <div className="w-1/2">
      <label htmlFor={props.label} className="text-sm">
        Data
      </label>
      <input
        type="datetime-local"
        name={props.label}
        value={props.value}
        onChange={props.handleOnChange}
        id={props.label}
        className="border-2 border-default-200 rounded-xl"
        style={{ padding: '6px 6px 6px 6px' }}
      />
    </div>
  )
}

export {
  InputDate
}