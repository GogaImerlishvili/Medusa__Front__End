import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Menus from "../menus/index"
import Link from "next/link"

const Hero = () => {
  return (
    <>
      <div className="flex mt-16">
        <div className="h-[85vh] relative w-1/6 bg-gray m-2 flex flex-col justify-items-center text-center">
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 ease-in duration-200">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 duration-200 ease-out">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 ease-in duration-200">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 duration-200 ease-out">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 ease-in duration-200">
              Hats
            </a>
          </Link>
          <Link href="/hats">
            <a className="p-5 hover:text-green-500 duration-200 ease-out">
              Hats
            </a>
          </Link>
          <button className="peer absolute w-full bottom-2 text-center">
            More Categories
          </button>

          <div className="hidden peer-hover:flex hover:flex absolute z-20 -right-[82vw] bg-red-500 h-[85vh] w-[82vw] mr-1">
            list of categories
          </div>
        </div>
        <div className="h-[85vh] w-full relative  w-5/6 mx-auto m-2 mr-2">
          <div className=" text-white absolute inset-0 z-10 flex flex-col justify-center items-center text-center small:text-left small:justify-end small:items-start small:p-32">
            <h1 className="text-2xl-semi mb-4 drop-shadow-md shadow-black">
              Summer styles are finally here!! goga && kaxa
            </h1>
            <p className="text-base-regular max-w-[32rem] mb-6 drop-shadow-md shadow-black">
              This year, our new summer collection will shelter you from the
              harsh elements of a world that doesn&apos;t care if you live or
              die.
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
      </div>

      <Menus />
    </>
  )
}

export default Hero
