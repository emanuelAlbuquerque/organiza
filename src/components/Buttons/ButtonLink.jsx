const ButtonLink = (props) => {
  return (
    <button className='border-none bg-transparent text-blue-500' onClick={props.handleOnClick} type='button'>
      {props.text}
    </button>
  )
}

export {
  ButtonLink
}