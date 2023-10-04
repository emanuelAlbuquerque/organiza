import { useState } from 'react'
import { AppContext } from './AppContext'

export const AppProvider = ({ children }) => {
  const [recives, setRecives] = useState([])
  const [expenses, setExpenses] = useState([])
  const [moneyTotal, setMoneyTotal] = useState(0)

  return (
    <AppContext.Provider value={{ recives, setRecives, expenses, setExpenses, moneyTotal, setMoneyTotal }}>
      {children}
    </AppContext.Provider>
  )
}
