import { ApexChart } from '@/components/ApexChart/ApexChart'
import { useAppContext } from '@/hooks/useContext'
import { getNameMonth } from '@/services/dates'
import { parceValueToBRL } from '@/services/format'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Scrollable,
  ScrollShadow,
  Card
} from '@nextui-org/react'

const ContainerChartIncomeAndExpenses = props => {
  const { moneyTotal } = useAppContext()
  function getMoneyByMonth() {
    const valueTotalRecipe = props.recipes.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    )

    const valueTotalExpense = props.expenses.reduce(
      (accumulator, currentValue) => accumulator + currentValue.price,
      0
    )

    const result = valueTotalRecipe - valueTotalExpense

    return {
      valueTotalRecipe,
      valueTotalExpense,
      result
    }
  }
  return (
    <>
      <div className="w-full mt-2 mb-2">
        <p>Despesas X Receitas</p>
      </div>

      <div>
        <ApexChart type="bar" option={props.options} series={props.series} />
      </div>

      <div className="w-full bg-white mt-6">
        <h2 className="text-dark-title text-xl mb-4">Detalhes</h2>
        <Card fullWidth>
          <ScrollShadow>

            <Table removeWrapper aria-label="Example static collection table">
              <TableHeader>
                <TableColumn>Período</TableColumn>
                <TableColumn>entradas</TableColumn>
                <TableColumn>Saídas</TableColumn>
                <TableColumn>Resultado</TableColumn>
                <TableColumn>Saldo</TableColumn>
              </TableHeader>
              <TableBody>
                <TableRow key="1">
                  <TableCell className='first-letter:uppercase'>{getNameMonth(new Date().getMonth())}</TableCell>
                  <TableCell className="text-success-600 font-semibold">
                    {parceValueToBRL(getMoneyByMonth().valueTotalRecipe)}
                  </TableCell>
                  <TableCell className="text-danger-500 font-semibold">
                    {parceValueToBRL(getMoneyByMonth().valueTotalExpense)}
                  </TableCell>
                  <TableCell
                    className={`${
                      getMoneyByMonth().result >= 0
                        ? 'text-success-600'
                        : 'text-danger-500'
                    } font-semibold`}
                  >
                    {parceValueToBRL(getMoneyByMonth().result)}
                  </TableCell>
                  <TableCell
                    className={`${
                      moneyTotal >= 0 ? 'text-success-600' : 'text-danger-500'
                    } font-semibold`}
                  >
                    {parceValueToBRL(moneyTotal)}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </ScrollShadow>
        </Card>
      </div>
    </>
  )
}

export { ContainerChartIncomeAndExpenses }
