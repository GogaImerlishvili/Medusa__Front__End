import { useCollections } from "medusa-react"
import Link from "next/link"

const Categories = () => {
  const { collections } = useCollections()

  if (!collections) return null
  if (collections.length <= 9) {
    return (
      <ul
        className={`hidden md:block md:flex relative md:w-1/6 md:h-full flex-col justify-items-center justify-start`}
      >
        {collections.map((collection) => (
          <li className="w-full p-4" key={collection.id}>
            <Link href={`/collections/${collection.id}`}>
              <a className="p-5 hover:text-green-500 ease-in duration-200">
                {collection.title}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    )
  }

  if (collections.length > 9) {
    const firstPart = collections.slice(0, 9)
    const secondPart = collections.slice(9)
    return (
      <ul
        className={`hidden md:block flex relative w-1/6 h-full  flex-col flex justify-items-center justify-between`}
      >
        {firstPart.map((collection) => (
          <li className="w-full p-4" key={collection.id}>
            <Link href={`/collections/${collection.id}`}>
              <a className="p-5 hover:text-green-500 ease-in duration-200">
                {collection.title}
              </a>
            </Link>
          </li>
        ))}

        <button className="hidden md:block peer md:absolute w-full bottom-0 p-2 ">
          More Categories
        </button>

        <ul className="md:hidden -gap-10 items-center md:items-start flex md:peer-hover:flex hover:flex md:absolute z-20 bg-white text-center w-full flex-col md:flex-wrap peer-hover:drop-shadow-lg hover:drop-shadow-lg top-full drop-shadow-2xl">
          <li>
            {secondPart.map((collection) => (
              <li className="w-full p-4" key={collection.id}>
                <Link href={`/collections/${collection.id}`}>
                  <a className="p-5 hover:text-green-500 ease-in duration-200 w-1/4">
                    {collection.title}
                  </a>
                </Link>
              </li>
            ))}
          </li>
        </ul>
      </ul>
    )
  }
}

export default Categories
