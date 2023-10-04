import { RemindersView } from '@/Views/RemindersView/RemindersView'
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]"

const Reminders = () => {
  return (
    <RemindersView />
  )
}

export const getServerSideProps = async (context) => {
  const { req, res } = context
  const session = await getServerSession(req, res, authOptions)

  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    }
  }

  return {
    props: {}
  }
}

export default Reminders