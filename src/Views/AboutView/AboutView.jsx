import { Container } from '@/components/Container/Container'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'

export const AboutView = () => {
  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg">
        <HeaderContainer title="Sobre nós" />
        <div className="mt-6">
          <div className="w-full mb-4">
            <p className="font-semibold text-black">
              Bem-vindo à nossa página "Sobre Nós". Somos uma equipe apaixonada
              por finanças e comprometida em ajudar indivíduos e empresas a
              alcançar a estabilidade financeira.
            </p>
          </div>
          <div>
            <div className="w-full mb-4 ">
              <p>
                {' '}
                Nossa missão é fornecer as ferramentas e os recursos necessários
                para que você possa: Gerenciar suas finanças de forma eficaz.
                Economizar dinheiro de maneira inteligente. Alcançar seus
                objetivos financeiros, sejam eles a compra de uma casa, a
                aposentadoria tranquila ou o crescimento de seu negócio.
                Acreditamos que o conhecimento financeiro é fundamental para o
                sucesso e a tranquilidade financeira. Portanto, estamos
                comprometidos em fornecer informações úteis, dicas práticas e
                orientações claras para ajudá-lo a tomar decisões financeiras
                informadas. Junte-se a nós nesta jornada em direção a um futuro
                financeiramente seguro e próspero. Estamos aqui para ajudar você
                em cada passo do caminho.
              </p>

              <h3 className="font-semibold">
                Obrigado por confiar em nós para cuidar do seu futuro
                financeiro!
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}
