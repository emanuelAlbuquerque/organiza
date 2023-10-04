import { Container } from '@/components/Container/Container'
import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Button } from '@nextui-org/react'
import { ButtonCategory } from '@/components/Buttons/ButtonCategory'
import { PlusIcon } from '@/components/Icons/Plus'
import { CategoriesController } from '@/controllers/CategoriesController'

export const CategoriesView = () => {
  const [categoryExpense, setCategoryExpense] = useState([])
  const [categoryRecipes, setCategoryRecipes] = useState([])

  useEffect(() => {
    listCategories()
  }, [])

  async function listCategories() {
    const categoriesRecipes = await CategoriesController.listCategoriesRecipes()
    const categoriesExpense = await CategoriesController.listCategoriesExpenses()

    setCategoryExpense(categoriesExpense)
    setCategoryRecipes(categoriesRecipes)
  }

  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg px-6 ">
        <div className="w-full flex items-center justify-between mb-5">
          <h1 className="font-bold text-xl">Categorias</h1>
          <Button
            startContent={<PlusIcon />}
            className="p-6 bg-success-50 text-success-700"
          >
            Nova Categoria
          </Button>
        </div>
        <div className="w-full">
          <Tabs
            className="flex mb-5"
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList:
                'gap-6 w-full relative rounded-none p-0 border-b border-divider',
              cursor: 'w-full bg-blue-700',
              tab: ' px-0 h-12',
              tabContent: 'group-data-[selected=true]:text-blue-700'
            }}
          >
            <Tab
              key="despesas"
              title={
                <div className="flex items-center space-x-2 text-right  ">
                  <span>Despesas</span>
                </div>
              }
            >
              {
                categoryExpense.map(category => (
                  <ButtonCategory label={category.name} color={category.color} />
                ))
              }
            </Tab>
            <Tab
              key="recipes"
              title={
                <div className="flex items-center space-x-2 ">
                  <span>Receitas</span>
                </div>
              }
            >
              {
                categoryRecipes.map(category => (
                  <ButtonCategory label={category.name} color={category.color} />
                ))
              }
            </Tab>
          </Tabs>
        </div>
      </div>
    </Container>
  )
}
