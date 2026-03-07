import { Footer } from "@/components/common/footer"
import { Header } from "@/components/common/header"
import { Outlet } from "react-router-dom"


export default function RootLayout() {
  return (
    <>
      <Header />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}