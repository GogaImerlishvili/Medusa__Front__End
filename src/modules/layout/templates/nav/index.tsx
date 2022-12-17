import { useMobileMenu } from "@lib/context/mobile-menu-context"
import Hamburger from "@modules/common/components/hamburger"
import CartDropdown from "@modules/layout/components/cart-dropdown"
import DropdownMenu from "@modules/layout/components/dropdown-menu"
import MobileMenu from "@modules/mobile-menu/templates"
import DesktopSearchModal from "@modules/search/templates/desktop-search-modal"
import clsx from "clsx"
import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import { BsPersonPlusFill } from "react-icons/bs"
import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import { InstantSearch, Hits } from "react-instantsearch-hooks-web"
import Hit from "@modules/search/components/hit"
import Search from "@modules/common/icons/search"
/* import Search from "@modules/layout/components/search/search" */
import DesktopHit from "@modules/search/components/desktop-hit"
import DesktopHits from "@modules/search/components/desktop-hits"
import SearchBox from "@modules/search/components/search-box"

const Nav = () => {
  const { pathname } = useRouter()
  const [isHome, setIsHome] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  //useEffect that detects if window is scrolled > 5px on the Y axis
  useEffect(() => {
    if (isHome) {
      const detectScrollY = () => {
        if (window.scrollY > 5) {
          setIsScrolled(true)
        } else {
          setIsScrolled(false)
        }
      }

      window.addEventListener("scroll", detectScrollY)

      return () => {
        window.removeEventListener("scroll", detectScrollY)
      }
    }
  }, [isHome])

  useEffect(() => {
    pathname === "/" ? setIsHome(true) : setIsHome(false)
  }, [pathname])

  const { toggle } = useMobileMenu()

  return (
    <div
      className={clsx("sticky top-0 inset-x-0 z-50 group", {
        "!fixed": isHome,
      })}
    >
      <header
        className={clsx(
          "relative h-16 px-8 mx-auto transition-colors bg-transparent border-b border-transparent duration-200 group-hover:bg-white group-hover:border-gray-200",
          {
            "!bg-white !border-gray-200": !isHome || isScrolled,
          }
        )}
      >
        <nav
          className={clsx(
            "text-gray-900 flex items-center justify-between w-full h-full text-small-regular transition-colors duration-200",
            {
              "text-white group-hover:text-gray-900": isHome && !isScrolled,
            }
          )}
        >
          <div className="flex-1 basis-0 h-full flex items-center">
            <div className="block small:hidden">
              <Hamburger setOpen={toggle} />
            </div>
            <div className="hidden small:block h-full">
              <DropdownMenu />
            </div>
          </div>

          {/* search */}

          <InstantSearch
            indexName={SEARCH_INDEX_NAME}
            searchClient={searchClient}
          >
            <div className="flex flex-col">
              <div className="flex flex-col h-full">
                <div className="w-full flex items-center gap-x-2 bg-gray-50 p-4">
                  <Search />
                  <SearchBox />
                </div>
              </div>
              <div className="absolute top-16">
                <Hits hitComponent={Hit} />
              </div>
            </div>

            {/* <div className="overflow-y-scroll flex-1 no-scrollbar mt-6">
                <DesktopHits hitComponent={DesktopHit} />
                </div> */}
          </InstantSearch>
          {/* search */}

          <div className="flex items-center gap-x-12 h-full flex-1 basis-0 justify-end">
            <div className="hidden small:flex items-center gap-x-6 h-full">
              {process.env.FEATURE_SEARCH_ENABLED && <DesktopSearchModal />}
              <Link href="/account">
                <a className="registration">ავტორიზაცია</a>
              </Link>
              <Link href="/account">
                <a className="person">
                  <BsPersonPlusFill />
                </a>
              </Link>
            </div>
            <CartDropdown />
          </div>
        </nav>
        <MobileMenu />
      </header>
    </div>
  )
}

export default Nav
