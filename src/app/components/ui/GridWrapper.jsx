export const GridWrapper = ({ children }) => {
  return (
    <main className=" max-tab:hidden h-[100svh] grid grid-cols-12 gap-x-2 p-2 select-none">
      {children}
    </main>
  )
}
