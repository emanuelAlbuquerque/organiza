import { Container } from '@/components/Container/Container'
import React from 'react'
import { Tabs, Tab, Button } from '@nextui-org/react'
import { ButtonCategory } from '@/components/Buttons/ButtonCategory'
import { PlusIcon } from '@/components/Icons/Plus'

export const CategoriesView = () => {
  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg px-6 ">
        <div className="w-full flex items-center justify-between mb-5">
          <h1 className="font-bold text-xl">Categorias</h1>
          <Button
            startContent={<PlusIcon />}
            className="p-6 bg-success-50 text-success-700"
          >
            Nova Categoria
          </Button>
        </div>
        <div className="w-full">
          <Tabs
            className="flex mb-5"
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                'gap-6 w-full relative rounded-none p-0 border-b border-divider',
              cursor: 'w-full bg-blue-700',
              tab: ' px-0 h-12',
              tabContent: 'group-data-[selected=true]:text-blue-700'
            }}
          >
            <Tab
              key="photos"
              title={
                <div className="flex items-center space-x-2 text-right  ">
                  <span>Despesas</span>
                </div>
              }
            >
              <ButtonCategory label="Alimentação" color="red" />
              <ButtonCategory label="Assinaturas e serviços" color="red" />
              <ButtonCategory label="Bares e restaurantes" color="red" />
              <ButtonCategory label="Casa" color="red" />
              <ButtonCategory label="Compras" color="red" />
              <ButtonCategory label="Cuidados pessoais" color="red" />
              <ButtonCategory label="Dívidas e empréstimos" color="red" />
              <ButtonCategory label="Educação" color="red" />
              <ButtonCategory label="Família e filhos" color="red" />
              <ButtonCategory label="Impostos e Taxas" color="red" />
            </Tab>
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2 ">
                  <span>Receitas</span>
                </div>
              }
            >
              <ButtonCategory label="Impostos e Taxas" color="red" />
              <ButtonCategory label="Impostos e Taxas" color="red" />
              <ButtonCategory label="Impostos e Taxas" color="red" />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  )
}
