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
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>
            <ButtonCategoria label='Alimentação' color='red'/>

            </Tab>
            <Tab
              key="music"
              title={
                <div className="flex items-center space-x-2 ">
                  <span>Receitas</span>

                </div>
              }

            >
              <button class="w-full text-black mt-20 py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                <span class="mr-2"></span>
                <span>Empréstimos</span>
              </button><Divider className="my-1" />
              <button class="w-full text-black mt-4 py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                <span class="mr-2"></span>
                <span>Investimentos</span>
              </button><Divider className="my-1" />
              <button class="w-full text-black mt-4 py-2 px-4 rounded-lg flex items-center transition duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300">
                <span class="mr-2"></span>
                <span>Salário</span>
              </button><Divider className="my-1" />

            </Tab>
          </Tabs>
        </div>
      </div>


    </Container>

  )

}
