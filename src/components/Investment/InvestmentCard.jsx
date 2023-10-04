import { React, useState } from 'react'
import { Card, CardBody } from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { InvestimentoModal } from '../Modals/IntestmentModal'
import moment from 'moment'
import { InputValue } from '../Inputs/InputValue'
import { ActionDanger } from '../ActionsNotifications/ActionDanger'

const InvestmentCard = props => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [value, setValue] = useState('')
  const [date, setDate] = useState('')
  const rate = 0.05
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const openModal = () => {
    if (value && date) {
      previewInvestment()
      setIsOpenModal(true)
    } else {
      setError('Preencha todos os campos')
    }
  }

  const closeModal = () => {
    setIsOpenModal(false)
  }

  const handleOnChangeSetValue = e => {
    setValue(parseFloat(e.target.value))
  }

  const getDiffDates = date => {
    const newDate = moment(date, 'YYYY-MM-DD').startOf('day')
    const currentDate = moment().startOf('day')
    return newDate.diff(currentDate, 'days')
  }

  const calculateCompoundInterest = () => {
    const p = parseFloat(value)
    const r = rate
    const t = getDiffDates(date)
    const n = 12
    const resultAmount = p * Math.pow(1 + r / n, n * t)

    return resultAmount.toFixed(2)
  }

  const confirmInvestment = () => {
    if (value && date) {
      const valueTotal = calculateCompoundInterest()

      console.log(valueTotal)
    } else {
      setError('Preencha todos os campos')
    }
  }

  const previewInvestment = () => {
    const value = calculateCompoundInterest()

    setMessage(
      `O Investimento após ${getDiffDates(date)} dia(s) renderá R$ ${value}`
    )
  }

  return (
    <div className="w-full max-w-lg m-auto mt-8">
      <Card className="py-4">
        <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
          <div className="w-full mb-5">
            <InputValue
              value={value}
              handleOnChange={handleOnChangeSetValue}
              label="Qual o valor que deseja investir? "
            />
          </div>

          <Input
            type="date"
            placeholder="0"
            label="Qual a data prevista para retirar o investimento?"
            value={date}
            onChange={e => setDate(e.target.value)}
            labelPlacement="outside"
            className="mb-5"
          />

          {error && (
            <div className="my-3 w-full">
              <ActionDanger error={error} />
            </div>
          )}

          <div className="flex justify-between items-center w-full">
            <Button color="warning" onClick={openModal}>
              Calcular Investimento
            </Button>
            <Button
              className="bg-blue-700 text-white font-semibold"
              onClick={() => confirmInvestment()}
            >
              Investir
            </Button>
          </div>
        </CardBody>
      </Card>

      <InvestimentoModal
        isOpen={isOpenModal}
        onOpenChange={closeModal}
        result={message}
      />
    </div>
  )
}

export { InvestmentCard }
