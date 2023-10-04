import React from 'react'

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button
} from '@nextui-org/react'
import { warning } from 'framer-motion'
import { BsPlus } from 'react-icons/bs'

export function DropdownButton(props) {
  return (
    <Dropdown>
      <DropdownTrigger>
        <button className="w-10 h-10 rounded-full bg-danger-500 flex justify-center items-center text-white border border-danger-500 focus:border-none ">
          <BsPlus size={30} />
        </button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Dropdown Variants"
        color={'primary'}
        variant={'solid'}
      >
        <DropdownItem key="new">
          <button className='w-full p-2' onClick={() => props.openCreateExpanseModal()}>Despesa </button>
        </DropdownItem>
        <DropdownItem key="copy">
          <button className='w-full p-2' onClick={() => props.openCreateRecipeModal()}>
            Receita
          </button>
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
