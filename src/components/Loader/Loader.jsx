import { CircularProgress } from '@nextui-org/react'

const Loader = props => {
  return (
    <div className="w-full flex items-center justify-center h-full">
      <CircularProgress label={props.message} />
    </div>
  )
}

export {
  Loader
}