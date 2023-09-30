import { Container } from '@/components/Container/Container'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'
import { LimitBar } from '@/components/Limit/LimitBar'

export const LimitView = () => {
    return (
        <Container>
            <div className="w-full p-8 flex bg-white shadow-xl rounded-lg">
                <div className="w-full mb-4">
                    <HeaderContainer title={"Orçamentos"}/>
                    <div className='mt-16'>
                        <LimitBar />
                    </div>
                </div>
            </div>

        </Container>
    )
}