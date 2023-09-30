import React from 'react'


import { LimitList } from './LimitList'
import { Container } from '@/components/Container/Container'

const itemsGastos = [
    {
      title: 'Alimentação',
      color: '#33AFFF'
    },
    {
      title: 'Casa',
      color: '#33AFFF'
    },
    {
      title: 'Lazer',
      color: '#33AFFF'
    },
    {
        title: 'Emergencia',
        color: '#33AFFF'
    },
    {
        title: 'Compras',
        color: '#33AFFF'
    },
    {
        title: 'Investimentos',
        color: '#33AFFF'
    }


  ]

const LimitBar = () => {

    return (
        <div>
            <div>
                <div>
                    <p className="text-dark-title font-semibold">despesas</p>
                </div>
    
                <LimitList items={itemsGastos} />
            </div>
        </div>
    )
}

export { LimitBar }