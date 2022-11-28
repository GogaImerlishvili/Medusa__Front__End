import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"
import UnderlineLink from "@modules/common/components/underline-link"
import ProductPreview from "@modules/products/components/product-preview"
import SkeletonProductPreview from "@modules/skeletons/components/skeleton-product-preview"
import {Swiper,SwiperSlide} from "swiper/react"
import  styles from  "./swiperStyles.module.css"
import Image from "next/image"
import cta_four from "../../../../../public/cta_four.jpg"
import cta_one from "../../../../../public/cta_one.jpg"
import cta_three from "../../../../../public/cta_three.jpg"
import cta_two from "../../../../../public/cta_two.jpg"



import "swiper/css"
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { Navigation } from "swiper";
import { lte } from "cypress/types/lodash"



const FeaturedProducts = () => {
  const { data } = useFeaturedProductsQuery()
  let singlePic = data?.map((product) => product.title)
  console.log(singlePic?.find((x,y) => x[y]))

  return (
    <div className="mt-20 font-bold ">
      <div>
      <h1 className="text-4xl ml-16 mb-4">Top შემოთავაზებები</h1>
          <Swiper  navigation={true} modules={[Navigation]} 
          onSlideChange={() => console.log('slide change')} 
          slidesPerView={3}
          spaceBetween={1}
          scrollbar={{ draggable: true }}
          className={styles.mySwiper}>
       {data?.map((product) => (
       
        <>
        <SwiperSlide key={product.id}>
          <Image width="300" height="500" src={product.thumbnail!} alt="alt" />
        </SwiperSlide>
        <div className="">{product.title}</div>
        </>
       ))}
      </Swiper> 
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
