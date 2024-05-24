import Link from 'next/link'
import { IoNotificationsOutline } from 'react-icons/io5'

import { DarkModeSwitch } from './DarkModeSwitch'

export const NavBar = () => {
  return (
    <header className=" flex justify-between h-16 items-center px-5 sm:px-8 drop-shadow-md">
      <Link
        href="/"
        className=" text-primary text-2xl font-bold">
        SonicBox
      </Link>
      <div className=" flex items-center gap-1">
        <div className=" bg-black size-8 flex justify-center items-center rounded-full hover:cursor-pointer">
          <IoNotificationsOutline className=" text-xl text-white" />
        </div>
        <DarkModeSwitch />
      </div>
    </header>
  )
}
