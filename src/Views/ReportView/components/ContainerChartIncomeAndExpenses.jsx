import { ApexChart } from '@/components/ApexChart/ApexChart'
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell
} from '@nextui-org/react'
import { Link } from '@nextui-org/react'

const option = {
    chart: {
      id: 'apexchart-example'
    },
    xaxis: {
      categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
    }
  }

  const series = [
    {
      name: 'series-1',
      data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
    }
  ]

const ContainerChartIncomeAndExpenses = () => {
  return (
    <>
      <div className="w-full mt-2 mb-2">
        <p>Despesas X Receitas</p>
      </div>
      <div className="flex gap-4">
        <Link href="#" size="sm">
          Diário
        </Link>
        <Link href="#" size="sm">
          Semanal
        </Link>
        <Link href="#" size="sm">
          Mensal
        </Link>
      </div>

      <div>
        <ApexChart type="bar" option={option} series={series} />
      </div>

      <div className="w-full bg-white mt-6">
        <h2 className="text-dark-title text-xl mb-4">Detalhes</h2>
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
              <TableCell>01/09/2023</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
            </TableRow>
            <TableRow key="2">
              <TableCell>01/09/2023</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
            </TableRow>
            <TableRow key="3">
              <TableCell>01/09/2023</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
            </TableRow>
            <TableRow key="4">
              <TableCell>01/09/2023</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
              <TableCell>R$ 0,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  )
}

export { ContainerChartIncomeAndExpenses }
