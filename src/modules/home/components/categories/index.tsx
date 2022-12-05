import Link from "next/link"
const Categories = () => {
  return (
    <>
      <button className="peer md:hidden">categories hamburger menu</button>
      <div className="peer-hover:hidden w-full md:h-[85vh] relative md:w-1/6 bg-gray flex flex-col md:justify-items-center text-center">
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
        <button className=" peer md:absolute w-full md:bottom-2 text-center">
          More Categories
        </button>

        <div className="hidden md:peer-hover:flex hover:flex absolute z-20 -right-[82vw] top-2 bg-white h-[85vh] w-[82vw] flex-col flex-wrap peer-hover:drop-shadow-lg hover:drop-shadow-lg">
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
            <a className="p-5 hover:text-green-500 ease-in duration-200 w-1/4 mr-auto">
              Hats
            </a>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Categories
