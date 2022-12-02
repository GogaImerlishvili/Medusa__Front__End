import Image, { StaticImageData } from "next/image"
import menClothes from "./images/839b3ef63d3f0d537286f4f5bd2da4be.jpg"
import sales from "./images/5173c434d7b50235b151ac58118b1a09.jpg"
import onlineExcl from "./images/jhdhgfjgh20220611100951.jpg"
import fashion from "./images/new-collection-clothes-mall-neatly-folded-high-quality-photo-new-collection-clothes-mall-neatly-folded-206548715.jpg"

interface MenuProps {
  title: string
  imgSrc: StaticImageData
}

const Menu = ({ title, imgSrc }: MenuProps) => (
  <li className="mx-auto w-1/2 relativeh  p-1 pb-0 md:p-0">
    <Image
      src={imgSrc}
      className="object-fill "
      width="400"
      height="300"
      alt="men clothes"
      title="ABC"
    />
    <h1 className="text-center relative -top-[60%] text-white font-bold -mb-6">
      {title}
    </h1>
  </li>
)

const Menus = () => {
  return (
    <ul className="p-2 flex flex-wrap md:flex-row md:flex-nowrap md:gap-x-2">
      <Menu imgSrc={menClothes} title="ფასდაკლება" />
      <Menu imgSrc={sales} title="საშემოდგომო კოლექცია" />
      <Menu imgSrc={sales} title="ონლაინ ექკლუზივი" />
      <Menu imgSrc={onlineExcl} title="ჩანთები და აქსესუარები" />
      <Menu imgSrc={fashion} title="ახალი კოლექცია" />
    </ul>
  )
}

export default Menus
