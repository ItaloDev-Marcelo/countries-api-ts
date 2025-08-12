import { FaSearch } from "react-icons/fa";
interface FormProps  {handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void}
const ISearch = ({handleSearch}:FormProps) => {
  return (
    <div className='flex flex-row rounded-[5px] items-center mb-5 md:mb-0 bg-gray-200 w-90 md:w-100 h-[45px] p-3'>
       <div className='pr-2' >< FaSearch  size={30} /></div>
        <input type='text' name='search' placeholder='Search for a country...' onChange={handleSearch} />
    </div>
  )
}

export default ISearch