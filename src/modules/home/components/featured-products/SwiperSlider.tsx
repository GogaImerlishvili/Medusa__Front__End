import {Swiper,SwiperSlide} from "swiper/react"
import  styles from  "./swiperStyles.module.css"
import { Navigation,FreeMode } from "swiper";
import ProductPreviewSlider from "@modules/products/components/product-preview/product-preview-slider";
import { useFeaturedProductsQuery } from "@lib/hooks/use-layout-data"

const SwiperSlider = () => {
    const {data} = useFeaturedProductsQuery()
  return (
    <div>
         <h1 className="text-4xl ml-16 mb-4">Top შემოთავაზებები</h1>
          <Swiper  navigation={true} modules={[FreeMode]} 
          onSlideChange={() => console.log('slide change')} 
          scrollbar={{ draggable: true }}
          className={styles.mySwiper}
          breakpoints= {{
            0: {
                slidesPerView:1,
                spaceBetween: 10,
            },
            480: {
                slidesPerView:2,
                spaceBetween: 10,
            },
            768: {
                slidesPerView:3,
                spaceBetween: 15,
            },
            1024: {
                slidesPerView:4,
                spaceBetween: 15,
            },
            1280: {
                slidesPerView:4,
                spaceBetween: 30,
            },
            
          }}
          >
       {data?.map((product) => (
       
        <>
        <SwiperSlide key={product.id}>
          <div>
         <ProductPreviewSlider {...product} />
         </div>
        </SwiperSlide>
        <div className="">{product.title}</div>
        </>
       ))}
      </Swiper> 
    </div>
  )
}

export default SwiperSlider