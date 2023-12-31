import { Container } from '@/components/Container/Container'
import { InvestmentCard } from '@/components/Investment/InvestmentCard'

export const InvestmentView = () => {
    return(
        <Container>
            <div className="w-full p-8 bg-white shadow-xl rounded-lg">
                <p className="font-bold text-2xl">Investimentos UNABANCK</p>
                <div className=''>
                    <InvestmentCard/>   
                </div>
            </div>
        </Container>
    )
}