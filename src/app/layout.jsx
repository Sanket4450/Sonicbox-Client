'use client'

import { usePathname, useRouter } from 'next/navigation'
import { Inter } from 'next/font/google'
import { Providers } from '@/app/providers'
import { Header } from '@/app/components/header'
import { Sidebar } from '@/app/components/sidebar'
import { SearchBar, SearchTabs } from '@/app/components/search'
import { GridWrapper, SearchWrapper } from '@/app/components/ui'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

const headerPaths = ['/sign-in', '/sign-up', '/setup-profile']
const sidebarPaths = ['/', '/search']

export default ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()

  const isSearchRoute = () => pathname.startsWith('/search')
  const searchSegments = () => pathname.split('/')
  const isValidSearchRoute = () =>
    searchSegments().length === 3 || searchSegments().length === 4

  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {headerPaths.includes(pathname) && <Header />}
          {sidebarPaths.includes(pathname) ||
          (isSearchRoute() && isValidSearchRoute()) ? (
            <GridWrapper>
              <Sidebar path={pathname} />
              {isSearchRoute() ? (
                <SearchWrapper>
                  <SearchBar router={router} />
                  {isSearchRoute() && isValidSearchRoute() && (
                    <SearchTabs router={router} />
                  )}
                  {children}
                </SearchWrapper>
              ) : (
                children
              )}
            </GridWrapper>
          ) : (
            <main>{children}</main>
          )}
        </Providers>
      </body>
    </html>
  )
}
