import { useCollections } from "medusa-react"
import Link from "next/link"
const Categories = () => {
  const { collections } = useCollections()
  return (
    <>
      <div
        className={`hidden md:block w-full md:flex relative md:w-[15vw] md:bg-gray  flex-col md:justify-items-center text-center`}
      >
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 ease-in duration-200">Hats</a>
        </Link>
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 duration-200 ease-out">Hats</a>
        </Link>
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 ease-in duration-200">Hats</a>
        </Link>
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 duration-200 ease-out">Hats</a>
        </Link>
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 ease-in duration-200">Hats</a>
        </Link>
        <Link href="/hats">
          <a className="p-5 hover:text-green-500 duration-200 ease-out">Hats</a>
        </Link>
        <button className="hidden md:block peer md:absolute w-full md:bottom-2 text-center">
          More Categories
        </button>

        <div className="md:hidden -gap-10 items-center md:items-start  flex md:peer-hover:flex hover:flex md:absolute z-20 md:-right-[82vw] md:top-2 bg-white md:h-[85vh] w-full text-center md:w-[83vw] flex-col md:flex-wrap peer-hover:drop-shadow-lg hover:drop-shadow-lg">
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 ease-in duration-200 w-1/4">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 ease-in duration-200 w-1/4">
              Hats
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Categories
