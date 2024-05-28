import { memo } from 'react'
import { IoNotificationsOutline } from 'react-icons/io5'

import { DarkModeSwitch } from '../common'

export const Options = memo(() => {
  return (
    <div className=" flex items-center gap-1">
      <div className=" bg-black text-far-gray size-8 flex justify-center items-center rounded-full hover:cursor-pointer hover:text-white transition duration-200">
        <IoNotificationsOutline className=" text-xl text-white" />
      </div>
      <DarkModeSwitch />
    </div>
  )
})
