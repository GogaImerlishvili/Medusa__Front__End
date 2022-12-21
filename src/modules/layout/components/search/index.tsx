import { searchClient, SEARCH_INDEX_NAME } from "@lib/search-client"
import { InstantSearch, Hits } from "react-instantsearch-hooks-web"
import SearchIcon from "@modules/common/icons/search"
import SearchBox from "@modules/search/components/search-box"
import MobileHit from "@modules/search/components/mobile-hit"
import MobileHits from "@modules/search/components/mobile-hits"

const Search = () => {
  return (
    <InstantSearch indexName={SEARCH_INDEX_NAME} searchClient={searchClient}>
      <div className="flex flex-col">
        <div className="flex flex-col h-full">
          <div className="w-full flex items-center gap-x-2 bg-gray-50 p-4">
            <SearchIcon />
            <SearchBox />
          </div>
        </div>
        <MobileHits
          className="absolute py-4 px-8 left-0 right-0 ml-auto mr-auto top-16 w-full md:w-3/5 bg-white overflow-y-scroll max-h-96"
          hitComponent={MobileHit}
        />
      </div>
    </InstantSearch>
  )
}

export default Search
