import { FaSearch } from "react-icons/fa";
import type { SearchProps } from "../types/SearchType";
const ISearch = ({handleSearch, toggle}:SearchProps) => {
  return (
    <div className={`flex flex-row  items-center mb-5 shadow md:mb-0 transition duration-700 ease-in-out gap-2
    w-full md:w-[50%] xl:w-[400px] h-[45px] lg:h-[60px] p-3 ${toggle ? 'bg-Blue-900 text-Grey-50' : 'bg-White-zero text-Grey-950 '} `}>
        <div className='pr-2' >< FaSearch  size={20} /></div>
        <input type='text' role='search' name='search' placeholder='Search for a country...' onChange={handleSearch} className={`${toggle ? 'bg-Blue-900 text-White-zero transition duration-700 ease-in-ou' : 
          'bg-White-zero text-Grey-950  transition duration-700 ease-in-ou '}`} />
    </div>
  )
}

export default ISearch