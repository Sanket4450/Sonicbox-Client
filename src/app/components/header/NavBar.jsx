import Link from 'next/link'
import { Options } from '../common' 

export const NavBar = () => {
  return (
    <header className=" flex justify-between h-16 items-center px-5 sm:px-8 drop-shadow-md">
      <Link
        href="/"
        className=" text-primary text-2xl font-bold">
        SonicBox
      </Link>
      <Options />
    </header>
  )
}
