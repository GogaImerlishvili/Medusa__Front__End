import Image from "next/image"
import number_one from "../../../../../public/number_one.jpg"
import number_four from "../../../../../public/number_two.jpg"
import number_five from "../../../../../public/number_five.jpg"
import UnderlineLink from "@modules/common/components/underline-link"
import { useCollections } from "medusa-react"

const StoresProduct = (id: any) => {
  const { collections } = useCollections()
  const data = collections?.map((c) => c.id)
  console.log(data!?.[2])

  function extractObject(id: any) {
    return collections?.filter((row) => row === id).pop()
  }

  let laura = extractObject(2)
  console.log(laura)

  return (
    <div className="p-2 flex flex-wrap md:flex-row md:flex-nowrap md:gap-x-2">
      <div className="card">
        <Image
          src={number_one}
          alt="store1"
          className="w-full h-full object-cover cursor-pointer  hover:scale-125 transition-all duration-1000 sm:h-2/4"
        />
        <div className="p-5 relative w-full h-16  bg-[#e67e22] hover:bg-[#dc7419] cursor-pointer">
          {/* badge */}
          <div className="flex items-center gap-2 ">
            <span className="badge text-xl">მაღაზია N1</span>
            <UnderlineLink href={`/collections/${data!?.[2]}`}>
              შოპინგის დაწყება{" "}
            </UnderlineLink>
          </div>
        </div>
      </div>

      <div className="card">
        <Image
          src={number_one}
          alt="store1"
          className="w-full h-full object-cover cursor-pointer  hover:scale-125 transition-all duration-1000"
        />
        <div className="p-5 relative w-full h-16  bg-[#e67e22] hover:bg-[#dc7419] cursor-pointer">
          {/* badge */}
          <div className="flex items-center gap-2 ">
            <span className="badge text-xl">მაღაზია N2</span>
            <UnderlineLink href={`/collections/${data!?.[2]}`}>
              შოპინგის დაწყება{" "}
            </UnderlineLink>
          </div>
        </div>
      </div>

      <div className="card">
        <Image
          src={number_one}
          alt="store1"
          className="w-full h-full object-cover cursor-pointer  hover:scale-125 transition-all duration-1000"
        />
        <div className="p-5 relative w-full h-16  flex-col  bg-[#e67e22] hover:bg-[#dc7419] cursor-pointer">
          {/* badge */}
          <div className="flex items-center gap-2 ">
            <span className="badge text-xl">მაღაზია N3</span>
            <UnderlineLink href={`/collections/${data!?.[2]}`}>
              შოპინგის დაწყება{" "}
            </UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StoresProduct
