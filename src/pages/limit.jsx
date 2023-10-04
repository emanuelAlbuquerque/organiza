import { LimitView } from '@/Views/LimitView/LimitView'
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]"

const Limit = () => {
  return (
    <LimitView/>
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

export default Limit