import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import StoresSection from "@modules/home/components/stores/StoresSection"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="მთავარი"
        description="შეიძინეთ ყველა ხელმისაწვდომი მოდელი მხოლოდ ALLSTORE-ში. მიწოდება ყველა რეგიონში. უსაფრთხო გადახდა."
      />
      <Hero />
      <StoresSection />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
