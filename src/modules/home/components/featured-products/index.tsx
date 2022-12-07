import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import Image from "next/image"
import SwiperSlider from "./SwiperSlider"

import "swiper/css"
import "swiper/css/navigation"
import { Pagination } from "swiper"
import { lte } from "cypress/types/lodash"

const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()
  let singlePic = data?.map((product) => product.id)
  console.log(singlePic?.find((x, y) => x[y]))

  return (
    <div className="mt-20 font-bold ">
      <div>
        <SwiperSlider />
      </div>
      <div className="content-container py-12">
        <ul className="grid grid-cols-2 small:grid-cols-4 gap-x-4 gap-y-8">
          {data
            ? data.map((product) => (
                <li key={product.id}>
                  <ProductPreview {...product} />
                </li>
              ))
            : Array.from(Array(4).keys()).map((i) => (
                <li key={i}>
                  <SkeletonProductPreview />
                </li>
              ))}
        </ul>
      </div>
    </div>
  )
}

export default FeaturedProducts
