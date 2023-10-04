import { ReportView } from '@/Views/ReportView/ReportView'
import { getServerSession } from 'next-auth'
import { authOptions } from "./api/auth/[...nextauth]"

const Report = () => {
  return (
    <ReportView />
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

export default Report