import Image, { StaticImageData } from "next/image"
import menClothes from "./images/839b3ef63d3f0d537286f4f5bd2da4be.jpg"
import sales from "./images/5173c434d7b50235b151ac58118b1a09.jpg"
import onlineExcl from "./images/jhdhgfjgh20220611100951.jpg"
import fashion from "./images/new-collection-clothes-mall-neatly-folded-high-quality-photo-new-collection-clothes-mall-neatly-folded-206548715.jpg"

interface CategoryProps {
  title: string
  imgSrc: StaticImageData
}

const Category = ({ title, imgSrc }: CategoryProps) => (
  <li className="mx-auto w-1/2  p-1 pb-0 md:p-0">
    <Image
      src={imgSrc}
      className="object-fill "
      width="400"
      height="300"
      alt="men clothes"
    />
    {/* <h1 className="text-center relative">{title}</h1> */}
  </li>
)

const Categories = () => {
  return (
    <ul className="p-2 flex flex-wrap md:flex-row md:flex-nowrap md:gap-x-2">
      <Category imgSrc={menClothes} title="ფასდაკლება" />
      <Category imgSrc={sales} title="საშემოდგომო კოლექცია" />
      <Category imgSrc={sales} title="ონლაინ ექკლუზივი" />
      <Category imgSrc={onlineExcl} title="ჩანთები და აქსესუარები" />
      <Category imgSrc={fashion} title="ახალი კოლექცია" />
    </ul>
  )
}

export default Categories
