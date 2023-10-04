import { createContext } from 'react'

const initialValues = {
  recives: [],
  setRecives: () => { },
  expenses: [],
  setExpenses: () => { },
  moneyTotal: 0,
  setMoneyTotal: () => {}
}

export const AppContext = createContext(initialValues)