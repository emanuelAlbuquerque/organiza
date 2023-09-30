import { AccordionComponent } from '@/components/Accordion/Accordion'
import { ButtonFastLink } from '@/components/Buttons/ButtonFastLink'
import { Container } from '@/components/Container/Container'
import { FinanceStatus } from '@/components/FinanceStatus/FinanceStatus'
import { CreateExpanseModal } from '@/components/Modals/CreateExpanseModal'
import { CreateRecipeModal } from '@/components/Modals/CreateRecipeModal'
import { useState } from 'react'

export const HomeView = () => {
  const [isCreateRecipeModalOpen, setCreateRecipeModalOpen] = useState(false);
  const [isCreateExpanseModalOpen, setCreateExpanseModalOpen] = useState(false);

  const openCreateRecipeModal = () => {
    setCreateRecipeModalOpen(true);
  };

  const openCreateExpanseModal = () => {
    setCreateExpanseModalOpen(true);
  };

  const closeModals = () => {
    setCreateRecipeModalOpen(false);
    setCreateExpanseModalOpen(false);
  };

  return (
    <Container>
      <div className="w-full p-8 flex bg-white shadow-xl rounded-lg">
        <div className="w-8/12">
          <div className="w-full mb-4">
            <p>Boa Noite,</p>
            <p className="font-bold text-2xl">Emanuel !</p>
          </div>
          <div className="w-full flex items-center gap-4 justify-between">
            <FinanceStatus title={'Despesa'} value={'13,00'} type={'despesa'} />
            <FinanceStatus title={'Receita'} value={'13,00'} type={'receita'} />
          </div>
        </div>
        <div className="w-5/12 ps-8 flex flex-col justify-between">
          <h1 className="font-bold text-xl mt-2">Acesso Rapido</h1>
          <div className="flex items-end gap-4">
            <ButtonFastLink type="receita" handleOnClick={openCreateRecipeModal}/>
            <ButtonFastLink type="despesa" handleOnClick={openCreateExpanseModal} />
          </div>
        </div>
      </div>

      <div className='mt-6'>
        <AccordionComponent />
      </div>

      <CreateRecipeModal isOpen={isCreateRecipeModalOpen} onOpenChange={closeModals} />
      <CreateExpanseModal isOpen={isCreateExpanseModalOpen} onOpenChange={closeModals} />
    </Container>
  )
}
