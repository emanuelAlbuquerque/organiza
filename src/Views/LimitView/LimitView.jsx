import { Container } from '@/components/Container/Container'
import { LimitBar } from '@/components/Limit/LimitBar'

export const LimitView = () => {
    return (
    <Container>
        <div className="w-full p-8 flex bg-white shadow-xl rounded-lg">
            <div className="w-8/12">
                <div className="w-full mb-4">
                    <p className="font-bold text-2xl">Limite de gastos</p>
                </div>
                <div className='mt-6'>
                    <LimitBar />
                </div>
             </div>
        </div>

    </Container>
    )
}