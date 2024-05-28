import { memo } from 'react'
import { NavBar } from './NavBar'

export const Header = memo(() => {
  return (
    <header>
      <NavBar />
    </header>
  )
})
