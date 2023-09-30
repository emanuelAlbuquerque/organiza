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

const options = {
    series: [44, 55, 13, 33],
    labels: ['Apple', 'Mango', 'Orange', 'Watermelon']
  }

const series = [44, 55, 13, 33]

const ContainerChartCategory = () => {
  return (
    <div>
      <div className="w-full mt-2 mb-2">
        <p>Categorias</p>
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

      <div className='flex justify-between items-center'>
        <ApexChart type="donut" option={options} series={series} />
        <ApexChart type="donut" option={options} series={series} />
      </div>

      <div className="w-full bg-white mt-6">
        <h2 className="text-dark-title text-xl mb-4">Receitas</h2>
        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Categorias</TableColumn>
            <TableColumn>Percentual</TableColumn>
            <TableColumn>Valor</TableColumn>
          </TableHeader>
          <TableBody> 
            <TableRow key="1">
              <TableCell>Salário</TableCell>
              <TableCell>50%</TableCell>
              <TableCell>R$ 2000,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>

      <div className="w-full bg-white mt-6">
        <h2 className="text-dark-title text-xl mb-4">Despesas</h2>
        <Table removeWrapper aria-label="Example static collection table">
          <TableHeader>
            <TableColumn>Categorias</TableColumn>
            <TableColumn>Percentual</TableColumn>
            <TableColumn>Valor</TableColumn>
          </TableHeader>
          <TableBody>
            <TableRow key="1">
              <TableCell>Alimentação</TableCell>
              <TableCell>50%</TableCell>
              <TableCell>R$ 2000,00</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export {
  ContainerChartCategory
}