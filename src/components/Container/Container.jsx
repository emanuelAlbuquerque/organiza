import { NotificationContainer } from 'react-notifications'
import { Header } from '../Header/Header'

const Container = props => {
  return (
    <div className="w-full pb-10">
      <Header />
      <div className="w-full max-w-5xl m-auto mt-8 px-4">{props.children}</div>
       <NotificationContainer />
    </div>
  )
}

export { Container }
