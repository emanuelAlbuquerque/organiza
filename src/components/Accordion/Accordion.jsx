import React from 'react'

import { Accordion, AccordionItem } from '@nextui-org/react'
import { AccordionItemContentAccount } from './AccordionItemContent/AccordionItemContentAccount'
import { AccordionItemContentCard } from './AccordionItemContent/AccordionItemContentCard'
import { AccordionItemContentLargerExpenditures } from './AccordionItemContent/AccordionItemContentLargerExpenditures'
import { AccordionItemContentSpendingLimit } from './AccordionItemContent/AccordionItemContentSpendingLimit'
import { AccordionItemContentRecentMovements } from './AccordionItemContent/AccordionItemContentRecentMovements'
import { AccordionSettingsTitle } from './AccordionSettings/AccordionSettingsTitle'
import { AccordionSettingsSubTitle } from './AccordionSettings/AccordionSettingsSubTitle'

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
      <Accordion
        selectionMode="multiple"
        variant="splitted"
        defaultExpandedKeys={['1']}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<p className="text-sm text-gray-subtitle">Saldo Geral</p>}
          subtitle={<AccordionSettingsSubTitle value={'30,00'} />}
          startContent={<div className="w-1 bg-blue-800 h-10 rounded-lg"></div>}
        >
          <AccordionItemContentRecentMovements
            value={'20,00'}
            type={'expense'}
          />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<AccordionSettingsTitle title="Contas a Pagar" />}
        >
          <AccordionItemContentAccount accounts={accountsPay} />
        </AccordionItem>
        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={<AccordionSettingsTitle title="Contas a Receber" />}
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
          subtitle={<AccordionSettingsSubTitle value={'50,00'} />}
          startContent={<div className="w-1 bg-blue-800 h-10 rounded-lg"></div>}
        >
          <AccordionItemContentCard />
        </AccordionItem>

        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<AccordionSettingsTitle title="Maiores Gastos do Mês Atual" />}
        >
          <AccordionItemContentLargerExpenditures items={itemsGastos} />
        </AccordionItem>

        <AccordionItem
          key="3"
          aria-label="Accordion 3"
          title={
            <AccordionSettingsTitle title="Limite de Gastos de Setembro" />
          }
        >
          <AccordionItemContentSpendingLimit />
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { AccordionComponent }
