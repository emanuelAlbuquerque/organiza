const ActionSuccess = (props) => {
  return (
    <div className="w-full h-10 rounded-2xl bg-success-400 text-dark-title flex items-center justify-center mt-5">
      {props.message}
    </div>
  )
}

export {
  ActionSuccess
}
