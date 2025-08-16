import { FaSearch } from "react-icons/fa";
interface FormProps  {handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void, toggle: boolean}
const ISearch = ({handleSearch, toggle}:FormProps) => {
  return (
    <div className={`flex flex-row rounded-[5px] items-center mb-5 shadow md:mb-0 w-full xl:w-[400px] h-[45px] p-3 ${toggle ? 'bg-Blue-900 text-Grey-50' : 'bg-White-zero text-Grey-950 '} `}>
       <div className='pr-2' >< FaSearch  size={20} /></div>
        <input type='text' name='search' placeholder='Search for a country...' onChange={handleSearch} className={toggle ? 'bg-Blue-900 text-White-zero' : 'bg-White-zero text-Grey-950 '} />
    </div>
  )
}

export default ISearch