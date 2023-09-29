import {
  Card,
  CardHeader,
  CardBody,
  Image,
  Button
} from '@nextui-org/react'

const AccordionItemContentCard = () => {
  return (
    <>
      <h1 className='mb-6 text-xl uppercase text-dark-title font-medium'>Meus Cartões</h1>
      <Card className="w-full shadow-none">
        <CardHeader className="flex justify-between pb-0">
          <div className='flex gap-3'>
            <Image
              alt="nextui logo"
              height={40}
              radius="sm"
              src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
              width={40}
            />
            <div className="flex flex-col">
              <p className="text-md">Banco do Brasil</p>
              <p className="text-small text-default-500">nextui.org</p>
            </div>
          </div>
          <Button className='bg-success-50 text-success-600'>Gerar Fatura</Button>
        </CardHeader>
        <CardBody>
          <div className='w-full grid grid-cols-2 text-center justify-center items-center p-4 bg-gray-200 rounded-3xl text-gray-subtitle'>
            <div>
              <p>Limite Desponivel</p>
              <p>R$ <span className='text-dark-title font-bold'>175,00</span></p>
            </div>
            <div>
              <p>Fatura Atual</p>
              <p>R$ <span className='text-dark-title font-bold'>25,00</span></p>
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  )
}

export { AccordionItemContentCard }
