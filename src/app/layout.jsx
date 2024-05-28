'use client'

import { usePathname } from 'next/navigation'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Header } from '@/app/components/header'
import { Sidebar } from '@/app/components/sidebar'
import { GridWrapper } from '@/app/components/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const headerPaths = ['/sign-in', '/sign-up', '/setup-profile']
const sidebarPaths = ['/', '/search']

export default ({ children }) => {
  const pathname = usePathname()

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {headerPaths.includes(pathname) && <Header />}
          {sidebarPaths.includes(pathname) ? (
            <GridWrapper>
              <Sidebar path={pathname} />
              {children}
            </GridWrapper>
          ) : (
            <main>{children}</main>
          )}
        </Providers>
      </body>
    </html>
  )
}
