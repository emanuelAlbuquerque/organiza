import { Container } from '@/components/Container/Container'
import React from "react";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/react";
import { RadioGroup, Radio } from "@nextui-org/react";
import { BadgeColor } from '@/components/BadgeColor';
import { ButtonCategoria } from '@/components/Buttons/ButtonCategoria';



export const CategoriasView = () => {

  return (
    <Container>
      <div className="w-full p-8 bg-white shadow-xl rounded-lg px-6 ">
        <div className=" w-full ">
          <Tabs
            className='flex mb-20'
            aria-label="Options"
            color="primary"
            variant="underlined"
            classNames={{
              tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
              cursor: "w-full bg-blue-700",
              tab: " px-0 h-12",
              tabContent: "group-data-[selected=true]:text-blue-700"
            }}
          >
            <Tab
              key="photos"
              title={
                <div className="flex items-center space-x-2 text-right  ">
                  <span>Despesas</span>
                </div>
              }
            >
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Assinaturas e serviços' color='red'/>
            <ButtonCategoria label='Bares e restaurantes' color='red'/>
            <ButtonCategoria label='Casa' color='red'/>
            <ButtonCategoria label='Compras' color='red'/>
            <ButtonCategoria label='Cuidados pessoais' color='red'/>
            <ButtonCategoria label='Dívidas e empréstimos' color='red'/>
            <ButtonCategoria label='Educação' color='red'/>
            <ButtonCategoria label='Família e filhos' color='red'/>
            <ButtonCategoria label='Impostos e Taxas' color='red'/>

            </Tab>
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2 ">
                  <span>Receitas</span>

                </div>
              }

            >
              <ButtonCategoria label='Impostos e Taxas' color='red'/>
              <ButtonCategoria label='Impostos e Taxas' color='red'/>
              <ButtonCategoria label='Impostos e Taxas' color='red'/>

            </Tab>
          </Tabs>
        </div>
      </div>


    </Container>

  )

}
