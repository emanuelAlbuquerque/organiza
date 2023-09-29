import { Header } from '../Header/Header'

const Container = props => {
  return (
    <div className="w-full">
      <Header />
      <div className="w-full max-w-5xl m-auto mt-8">{props.children}</div>
    </div>
  )
}

export { Container }
