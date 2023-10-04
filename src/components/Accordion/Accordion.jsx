import React from 'react'
import { Accordion, AccordionItem } from '@nextui-org/react'
import { AccordionItemContentAccount } from './AccordionItemContent/AccordionItemContentAccount'
import { AccordionItemContentLargerExpenditures } from './AccordionItemContent/AccordionItemContentLargerExpenditures'
import { AccordionItemContentSpendingLimit } from './AccordionItemContent/AccordionItemContentSpendingLimit'
import { AccordionItemContentRecentMovements } from './AccordionItemContent/AccordionItemContentRecentMovements'
import { AccordionSettingsTitle } from './AccordionSettings/AccordionSettingsTitle'
import { AccordionSettingsSubTitle } from './AccordionSettings/AccordionSettingsSubTitle'
import { parceValueToBRL } from '@/services/format'

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

const AccordionComponent = props => {
  return (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-2">
      <Accordion
        selectionMode="multiple"
        variant="splitted"
        defaultExpandedKeys={['1']}
      >
        <AccordionItem
          key="1"
          aria-label="Accordion 1"
          title={<p className="text-sm text-gray-subtitle">Saldo Geral</p>}
          subtitle={<AccordionSettingsSubTitle value={parceValueToBRL(props.moneyTotal)} />}
          startContent={<div className="w-1 bg-blue-800 h-10 rounded-lg"></div>}
        >
          <AccordionItemContentRecentMovements moviments={props.movimentsRecents} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<AccordionSettingsTitle title="Contas a Pagar" />}
        >
          <AccordionItemContentAccount
            accounts={props.expensesPaymentaWaiting}
            callback={props.callback}
          />
        </AccordionItem>
      </Accordion>
      <Accordion selectionMode="multiple" variant="splitted">
        <AccordionItem
          key="1"
          aria-label="Accordion 3"
          title={
            <AccordionSettingsTitle title="Limite de Gastos" />
          }
        >
          <AccordionItemContentSpendingLimit limits={ props.limits} />
        </AccordionItem>
        <AccordionItem
          key="2"
          aria-label="Accordion 2"
          title={<AccordionSettingsTitle title="Contas a Receber" />}
        >
          <AccordionItemContentAccount
            accounts={props.recipesReceiveWating}
            callback={props.callback}
          />
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export { AccordionComponent }
