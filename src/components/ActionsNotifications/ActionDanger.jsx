const ActionDanger = (props) => {
  return (
    <div className="w-full h-10 rounded-2xl bg-danger-400 text-white flex items-center justify-center">
      {props.error}
    </div>
  )
}

export {
  ActionDanger
}
