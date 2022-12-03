import Link from "next/link"
const Categories = () => {
  return (
    <div className="h-[85vh] relative w-1/6 bg-gray  flex flex-col justify-items-center text-center">
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
      <button className="peer absolute w-full bottom-2 text-center">
        More Categories
      </button>

      <div className="hidden peer-hover:flex hover:flex absolute z-20 -right-[82vw] top-2 bg-red-500 h-[85vh] w-[82vw] flex-col flex-wrap">
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
  )
}

export default Categories
