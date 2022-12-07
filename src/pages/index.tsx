import Head from "@modules/common/components/head"
import FeaturedProducts from "@modules/home/components/featured-products"
import Hero from "@modules/home/components/hero"
import Layout from "@modules/layout/templates"
import { ReactElement } from "react"
import { NextPageWithLayout } from "types/global"
import VipStores from "@modules/home/components/vip-stores-section/VipStores"

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Head
        title="მთავარი"
        description="შეიძინეთ ყველა ხელმისაწვდომი მოდელი მხოლოდ ALLSTORE-ში. მიწოდება ყველა რეგიონში. უსაფრთხო გადახდა."
      />
      <Hero />
      <VipStores />
      <FeaturedProducts />
    </>
  )
}

Home.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>
}

export default Home
