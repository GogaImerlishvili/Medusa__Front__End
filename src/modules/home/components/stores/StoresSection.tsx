import React from "react"
import StoresProduct from "@modules/products/components/store-products/StoresProduct"
import { useCollections } from "medusa-react"

const StoresSection = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold ml-16 mb-4 mt-10">VIP მაღაზიები</h1>
      <StoresProduct />
    </div>
  )
}

export default StoresSection
