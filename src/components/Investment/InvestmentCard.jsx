import { React, useEffect, useState } from 'react'
import {
  Card,
  CardBody,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
  Tooltip
} from '@nextui-org/react'
import { Input } from '@nextui-org/react'
import { Button } from '@nextui-org/react'
import { InvestimentoModal } from '../Modals/IntestmentModal'
import moment from 'moment'
import { InputValue } from '../Inputs/InputValue'
import { ID } from '@/services/generateUUID'
import { InvestmentController } from '@/controllers/InvestmentController'
import { NotificationAction } from '@/services/notifications'
import { parceValueToBRL } from '@/services/format'
import {
  getCurrentDateToFormatYYYYMMDD,
  parseDateFromDDMMYYYY
} from '@/services/dates'
import { A_RETIRAR } from '@/constants/status'

const InvestmentCard = props => {
  const [isOpenModal, setIsOpenModal] = useState(false)
  const [value, setValue] = useState('')
  const [date, setDate] = useState(getCurrentDateToFormatYYYYMMDD())
  const [investments, setInvestments] = useState([])
  const [message, setMessage] = useState('')

  useEffect(() => {
    listInvestment()
  }, [])

  const listInvestment = async () => {
    const res = await InvestmentController.listInvestments()

    setInvestments(res)
  }

  const openModal = () => {
    if (value && date) {
      previewInvestment()
      setIsOpenModal(true)
    } else {
      NotificationAction.notificationWarning('Preencha todos os campos.')
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
    console.log(newDate.diff(currentDate, 'days'))
    return newDate.diff(currentDate, 'days')
  }

  const calculateCompoundInterest = (value, date) => {
    const rateByMonth = 0.05 / 30
    return parseFloat(value) * Math.pow(1 + rateByMonth, getDiffDates(date))
  }

  // Formula: Montante = Valor Inicial * (1 + Taxa de Juros Diária) ^ Número de Dias

  const confirmInvestment = async () => {
    if (value && date) {
      const req = {
        id: ID(),
        value: parseFloat(value),
        status: A_RETIRAR,
        expectedDate: new Date(date),
        dateEntry: moment().format('YYYY-MM-DD').concat('T00:00:00.000Z')
      }

      const res = InvestmentController.createInvestment(req)

      if (res) {
        NotificationAction.notificationSucesss('Investimento adicionado.')
        clearFiels()
      } else {
        NotificationAction.notificationError(
          'Erro ao adicionar o investimento.'
        )
      }
    } else {
      NotificationAction.notificationWarning('Preencha todos os campos.')
    }
  }

  const clearFiels = () => {
    setValue('')
    setDate('')
  }

  const previewInvestment = () => {
    const amount = calculateCompoundInterest(value, date)

    setMessage(
      `Após ${getDiffDates(date)} dia(s) o valor final será: ${parceValueToBRL(
        amount
      )}`
    )
  }

  return (
    <div className="w-full m-auto mt-8 flex flex-col justify-center items-center">
      <Card className="py-4 w-full max-w-xl mb-8">
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

      <Table removeWrapper aria-label="Example static collection table">
        <TableHeader>
          <TableColumn>Data Entrada</TableColumn>
          <TableColumn>Valor Investido</TableColumn>
          <TableColumn>Prev.Retirada</TableColumn>
          <TableColumn>Prev.Valor Estimado</TableColumn>
          <TableColumn></TableColumn>
        </TableHeader>
        <TableBody>
          {investments.map(investment => (
            <TableRow key={InvestimentoModal.id}>
              <TableCell>
                {parseDateFromDDMMYYYY(investment.dateEntry)}
              </TableCell>
              <TableCell>{parceValueToBRL(investment.value)}</TableCell>
              <TableCell>{parseDateFromDDMMYYYY(investment.expectedDate)}</TableCell>
              <TableCell>
                {parceValueToBRL(
                  calculateCompoundInterest(
                    investment.value,
                    investment.expectedDate
                  )
                )}
              </TableCell>
              <TableCell>
                <div className="relative flex items-center gap-2 justify-center">
                  <Tooltip content="Retirar Investimento">
                    <Button color="success">Sacar</Button>
                  </Tooltip>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <InvestimentoModal
        isOpen={isOpenModal}
        onOpenChange={closeModal}
        result={message}
      />
    </div>
  )
}

export { InvestmentCard }
