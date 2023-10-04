import { Container } from '@/components/Container/Container'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'
import { LimitList } from '@/components/Limit/LimitList'
import { Loader } from '@/components/Loader/Loader'
import { LimitController } from '@/controllers/LimitController'
import { useEffect, useState } from 'react'

export const LimitView = () => {
  const [limits, setLimits] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    initComponent()
  }, [])

  async function initComponent() {
    await listLimits()
  }

  async function listLimits() {
    setLoading(true)
    const res = await LimitController.listLimits()

    setLimits(res)
    setLoading(false)
  }

  return (
    <Container> 
      {
        loading ? (
          <Loader message="Carregando..."/>
        ) : (
          <div className="w-full p-8 flex bg-white shadow-xl rounded-lg">
            <div className="w-full mb-4">
              <HeaderContainer title={'Orçamentos'} />
              <div className="mt-16">
                <LimitList items={limits} callback={ listLimits } />
              </div>
            </div>
          </div>
        )
      }
    </Container>
  )
}
