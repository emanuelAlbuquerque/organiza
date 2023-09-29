import React from 'react'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { AccordionItemContentAccount } from './AccordionItemContent/AccordionItemContentAccount'
import { AccordionItemContentCard } from './AccordionItemContent/AccordionItemContentCard'
import { AccordionItemContentLargerExpenditures } from './AccordionItemContent/AccordionItemContentLargerExpenditures'

const accountsPay = [
  {
    title: 'Academia',
    description: '29/03/2023',
    value: 80.0,
    type: 'pay'
  },
  {
    title: 'Academia',
    description: '29/03/2023',
    value: 80.0,
    type: 'pay'
  }
]

const accountsReceive = [
  {
    title: 'Academia',
    description: '29/03/2023',
    value: 80.0,
    type: 'receive'
  },
  {
    title: 'Academia',
    description: '29/03/2023',
    value: 80.0,
    type: 'receive'
  }
]

const itemsGastos = [
  {
    title: 'Alimentação',
    value: 12.9,
    color: '#33FF61'
  },
  {
    title: 'Lazer',
    value: 12.9,
    color: '#33AFFF'
  },
  {
    title: 'Alimentação',
    value: 12.9,
    color: '#33FF61'
  }
]

const AccordionComponent = () => {
  return (
    <div className="flex">
      <Accordion selectionMode="multiple" variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Acco  rdion 1"
          title={
            <p className="text-sm text-gray-subtitle">Faturas de Outubro</p>
          }
          subtitle={
            <p className="text-xl text-dark-title font-bold">
              <span className="text-gray-subtitle font-normal">R$</span> 30,00
            </p>
          }
          startContent={<div className="w-1 bg-blue-800 h-10 rounded-lg"></div>}
        >
          <AccordionItemContentCard />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={
            <p className="text-dark-title font-semibold">Contas a Pagar</p>
          }
        >
          <AccordionItemContentAccount accounts={accountsPay} />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={
            <p className="text-dark-title font-semibold">Contas a Receber</p>
          }
        >
          <AccordionItemContentAccount accounts={accountsReceive} />
        </AccordionItem>
      </Accordion>
      <Accordion selectionMode="multiple" variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Acco  rdion 1"
          title={
            <p className="text-sm text-gray-subtitle">Faturas de Outubro</p>
          }
          subtitle={
            <p className="text-xl text-dark-title font-bold">
              <span className="text-gray-subtitle font-normal">R$</span> 30,00
            </p>
          }
          startContent={<div className="w-1 bg-blue-800 h-10 rounded-lg"></div>}
        >
          <AccordionItemContentCard />
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={
            <p className="text-dark-title font-semibold">Maiores Gastos do Mês Atual</p>
          }
        >
          <AccordionItemContentLargerExpenditures items={itemsGastos} />
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { AccordionComponent }
