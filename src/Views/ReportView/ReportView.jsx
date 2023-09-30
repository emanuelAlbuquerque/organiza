import React from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { Container } from '@/components/Container/Container'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'
import { ContainerChartIncomeAndExpenses } from './components/ContainerChartIncomeAndExpenses'
import { ContainerChartCategory } from './components/ContanerChartCategory'

export const ReportView = () => {
  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg">
        <HeaderContainer title="Relatórios" />

        <div className="gap-4 flex-wrap mt-10 text-gray-500 py-2">
          <Tabs
            key={1}
            variant="underlined"
            aria-label="Tabs variants"
            color="primary"
          >
            <Tab key="despesasXreceitas" title="Despesas X Receitas" className="ps-0">
              <ContainerChartIncomeAndExpenses />
            </Tab>
            <Tab key="categorias" title="Categorias">
              <ContainerChartCategory />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  )
}
