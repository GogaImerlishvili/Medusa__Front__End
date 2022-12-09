import { useCollections } from "medusa-react"
import Link from "next/link"
const Categories = () => {
  const { collections } = useCollections()
  return (
    <>
      <div
        className={`hidden md:block w-full md:flex relative w-1/6 md:bg-gray flex-col md:justify-items-center`}
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
        <button className="hidden md:block peer md:absolute w-full bottom-0 p-2 ">
          More Categories
        </button>

        <div className="md:hidden -gap-10 items-center md:items-start flex md:peer-hover:flex hover:flex md:absolute z-20 bg-white text-center w-full flex-col md:flex-wrap peer-hover:drop-shadow-lg hover:drop-shadow-lg top-full drop-shadow-2xl">
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
