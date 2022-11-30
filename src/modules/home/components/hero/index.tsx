import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"
import Categories from "../categories/index"

const Hero = () => {
  return (
    <>
      <div className="flex mt-16">
        <div className="h-[85vh] relative w-2/5">CATEGORIES</div>
        <div className="h-[85vh] w-full relative  w-3/5 mx-auto">
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

      <Categories />
    </>
  )
}

export default Hero
