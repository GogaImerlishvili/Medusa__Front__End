import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import menClothes from "../hero/images/839b3ef63d3f0d537286f4f5bd2da4be.jpg"
import newCollection from "../hero/images/images (1).jpeg"
import sales from "../hero/images/5173c434d7b50235b151ac58118b1a09.jpg"
import onlineExcl from "../hero/images/jhdhgfjgh20220611100951.jpg"
import fashion from "../hero/images/new-collection-clothes-mall-neatly-folded-high-quality-photo-new-collection-clothes-mall-neatly-folded-206548715.jpg"
import styles from "./images.module.css"

const Hero = () => {
  return (
    <>
    <div className="h-[90vh] w-full relative">
      <div className="text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
        <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
          Summer styles are finally here!! goga && kaxa
        </h1>
        <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
          This year, our new summer collection will shelter you from the harsh
          elements of a world that doesn&apos;t care if you live or die.
        </p>
        <UnderlineLink href="/store">Explore products</UnderlineLink>
      </div>
      <Image
        src="/hero.jpg"
        layout="fill"
        loading="eager"
        priority={true}
        quality={90}
        objectFit="cover"
        alt="Photo by @thevoncomplex https://unsplash.com/@thevoncomplex"
        className="absolute inset-0"
        draggable="false"
      />
    </div>
    <div className="h-[38vh] w-[90%] ml-[5%] relative  mt-4">
    <ul className="grid grid-cols-5 small:grid-flow-col gap-x-2 ">
      <li key={"1"}>
      <Image src={menClothes} alt="men clothes" height={366} />
      <h1 className="title">ფასდაკლება</h1>
      </li>
      <li key={"2"}>
      <Image src={newCollection} alt="new collection"  height={280} />
      <h1 className="title">საშემოდგომო კოლექცია</h1>
      </li>
      <li key={"2"}>
      <Image src={sales} alt="new collection"   />
      <h1 className="title">ონლაინ ექკლუზივი</h1>
      </li>
      <li key={"2"}>
      <Image src={onlineExcl} alt="new collection" height={600}  />
      <h1 className="title">ჩანთები და აქსესუარები</h1>
      </li>
      <li key={"2"}>
      <Image src={fashion} alt="new collection"  height={800}/>
      <h1 className={styles.title1}>ახალი კოლექცია</h1>
      </li>
     

    </ul>
        
    </div>
    </>
  )
}

export default Hero
