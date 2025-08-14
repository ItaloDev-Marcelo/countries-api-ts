
import Dropdown from '../components/Dropdown';
import ISearch from '../components/ISearch'

interface FormProps  {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  handleSelect: (value: string) => void
}

const Form = ({handleSearch,handleSelect}:FormProps) => {
  return (
    <div className='flex flex-col md:flex-row justify-between  items-start px-3 md:items-center my-10 md:my-7  lg:px-10'>
      <ISearch handleSearch={handleSearch} />
      <Dropdown handleSelect={handleSelect} />
    </div>
  )
}

export default Form