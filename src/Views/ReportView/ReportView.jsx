import React, { useEffect, useState } from 'react'
import { Tab, Tabs } from '@nextui-org/react'
import { Container } from '@/components/Container/Container'
import { HeaderContainer } from '@/components/HeaderContainer/HeaderContainer'
import { ContainerChartIncomeAndExpenses } from './components/ContainerChartIncomeAndExpenses'
import { ContainerChartCategory } from './components/ContanerChartCategory'
import { MovimentsController } from '@/controllers/MovimentsController'
import { EXPENSE, RECIPES } from '@/constants/type'
import { parseDateFromDDMMYYYY } from '@/services/dates'

export const ReportView = () => {
  const [recipes, setRecipes] = useState([])
  const [expenses, setExpenses] = useState([])
  const [options, setOptions] = useState()
  const [series, setSeries] = useState()

  useEffect(() => {
    createComponent()
  }, [])

  async function listRecipesByMonth() {
    const res = await MovimentsController.listRecipesReceivedByMonth()

    return res
  }

  async function listExpenseByMonth() {
    const res = await MovimentsController.listExpensesPaymentByMonth()

    return res
  }

  async function createComponent() {
    const recipes = await listRecipesByMonth()
    const expense = await listExpenseByMonth()

    const formattedData = transformData([...recipes, ...expense])
    const series = seriesFormat([
      formattedData.recipes,
      formattedData.expenses,
      formattedData.labels
    ])
    const options = formattedOptions(series)

    setOptions(options)
    setSeries(series)
    setRecipes(recipes)
    setExpenses(expense)
  }

  function seriesFormat(data) {
    return {
      series: [
        {
          name: 'Receitas',
          data: data[0],
          type: 'bar',
          color: '#00FF32'
        },
        {
          name: 'Despesas',
          data: data[1],
          type: 'bar',
          color: '#FF0000'
        }
      ],
      categories: data[2]
    }
  }

  function transformData(data) {
    const formattedData = {
      labels: [], // Dias
      recipes: [], // Receitas por dia
      expenses: [] // Despesas por dia
    }

    // Crie um objeto para mapear o total de receitas e despesas por dia
    const dailyTotals = {}

    data.forEach(item => {
      const date = parseDateFromDDMMYYYY(item.date)

      // Se a data ainda não estiver no array de labels, adicione-a
      if (!formattedData.labels.includes(date)) {
        formattedData.labels.push(date)
      }

      // Inicialize os totais diários se ainda não estiverem definidos
      if (!dailyTotals[date]) {
        dailyTotals[date] = {
          recipes: 0,
          expenses: 0
        }
      }

      // Se for uma receita, adicione ao total de receitas do dia
      if (item.type === RECIPES) {
        dailyTotals[date].recipes += item.price
      } else if (item.type === EXPENSE) {
        // Se for uma despesa, adicione ao total de despesas do dia
        dailyTotals[date].expenses += item.price
      }
    })

    // Preencha os arrays de receitas e despesas com os valores diários correspondentes
    formattedData.labels.forEach(label => {
      formattedData.recipes.push(dailyTotals[label].recipes)
      formattedData.expenses.push(dailyTotals[label].expenses)
    })

    return formattedData
  }

  function formattedOptions(series) {
    const options = {
      chart: {
        type: 'bar'
      },
      xaxis: {
        categories: series.categories
      },
      legend: {
        position: 'bottom'
      },
      dataLabels: {
        enabled: false
      },
      noData: {
        text: "Sem Dados",
        align: 'center',
        verticalAlign: 'middle',
        style: {
          fontSize: '20px',
        }
      }
    }

    return options
  }

  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg">
        <HeaderContainer title="Relatórios" />

        <div className="gap-4 flex-wrap mt-10 text-gray-500 py-2">
          <Tabs
            key={1}
            variant="underlined"
            aria-label="Tabs variants"
            color="primary"
          >
            <Tab
              key="despesasXreceitas"
              title="Despesas X Receitas"
              className="ps-0"
            >
              <ContainerChartIncomeAndExpenses
                options={options}
                series={series?.series}
                recipes={recipes}
                expenses={expenses}
              />
            </Tab>
            <Tab key="categorias" title="Categorias">
              <ContainerChartCategory />
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  )
}
