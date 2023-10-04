import { HomeView } from '@/Views/HomeView/HomeView'
import { getServerSession } from "next-auth/next"
import { authOptions } from "./api/auth/[...nextauth]"

const Home = () => {
  return (
    <HomeView />
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

export default Home

