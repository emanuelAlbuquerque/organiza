import { InvestmentView } from "@/Views/InvestmentView/InvestmentView"
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]"

const Investment = () => {
    return (
        <InvestmentView/>
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

export default Investment