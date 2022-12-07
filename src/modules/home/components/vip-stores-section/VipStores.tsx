import React from "react"
import Image from "next/image"
import store_1 from "../../../../../public/download.jpeg"
import store_2 from "../../../../../public/images.jpeg"
import store_3 from "../../../../../public/SeptemberShop-courtesy_gb1yug.webp"
import UnderlineLink from "@modules/common/components/underline-link"

const VipStores = () => {
  return (
    <div className="flex">
      <div className="flex flex-col bg-white rounted-lg shadow-md w-full m-6 overflow-hidden sm:w-1/4">
        <Image src={store_1} alt="store_1" className="h-20 m-6" />
        <h2 className="text-center px-2 pb-5">მაღაზია N1</h2>
        <UnderlineLink href="/collections">პროდუქტის ნახვა</UnderlineLink>
      </div>

      <div className="flex flex-col bg-white rounted-lg shadow-md w-full m-6 overflow-hidden sm:w-1/4">
        <Image src={store_1} alt="store_1" className="h-20 m-6" />
        <h2 className="text-center px-2 pb-5">მაღაზია N1</h2>
        <UnderlineLink href="/collections">პროდუქტის ნახვა</UnderlineLink>
      </div>

      <div className="flex flex-col bg-white rounted-lg shadow-md w-full m-6 overflow-hidden sm:w-1/4">
        <Image src={store_1} alt="store_1" className="h-20 m-6" />
        <h2 className="text-center px-2 pb-5">მაღაზია N1</h2>
        <UnderlineLink href="/collections">პროდუქტის ნახვა</UnderlineLink>
      </div>

      <div className="flex flex-col bg-white rounted-lg shadow-md w-full m-6 overflow-hidden sm:w-1/4">
        <Image src={store_1} alt="store_1" className="h-20 m-6" />
        <h2 className="text-center px-2 pb-5">მაღაზია N1</h2>
        <UnderlineLink href="/collections">პროდუქტის ნახვა</UnderlineLink>
      </div>
    </div>
  )
}

export default VipStores
