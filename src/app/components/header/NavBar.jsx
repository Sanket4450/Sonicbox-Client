import { IoNotificationsOutline } from 'react-icons/io5'

import { DarkModeSwitch } from './DarkModeSwitch'

export const NavBar = () => {
  return (
    <header className=" flex justify-between h-14 items-center px-4 sm:px-8 drop-shadow-md">
      <h3 className=" text-primary text-2xl font-bold">SonicBox</h3>
      <div className=' flex items-center gap-1'>
        <div className=" bg-black size-8 flex justify-center items-center rounded-full hover:cursor-pointer">
          <IoNotificationsOutline className=" text-xl text-white" />
        </div>
        <DarkModeSwitch />
      </div>
    </header>
  )
}
