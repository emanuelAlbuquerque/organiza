import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react"
import { useSession, signOut } from 'next-auth/react'

export const Header = () => {
  const { data: session } = useSession()
  return (
    <Navbar className='w-full bg-blue-700'>
      <NavbarBrand>
        {/* <AcmeLogo /> */}
        <p className="font-bold text-white">UNABANK</p>
      </NavbarBrand>

      <NavbarContent className="hidden sm:flex gap-6" justify="center">
        <NavbarItem>
          <Link href="/" className='text-white'>
            Visão Geral
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="report" className='text-white'>
            Relatórios
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href="limit">
            Orçamentos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className='text-white' href="investment">
            Investimentos
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent as="div" justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="Jason Hughes"
              size="sm"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">{session?.user.email}</p>
            </DropdownItem>
            <DropdownItem key="settings" className='text-dark-title'>Minha Conta</DropdownItem>
            <DropdownItem key="categories">
              <Link href='/categories' className='text-dark-title'>Categorias</Link>
            </DropdownItem>
            <DropdownItem key="reminders">
              <Link href='/reminders' className='text-dark-title'>
                Lembretes
              </Link>
            </DropdownItem>
            <DropdownItem key="logout" color="danger" onClick={() => signOut()}>
              Sair
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  )
}