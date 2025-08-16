
import Dropdown from './Dropdown';
import ISearch from './ISearch'

interface FormProps  {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  handleSelect: (value: string) => void,
  toggle: boolean
}

const Form = ({handleSearch,handleSelect, toggle}:FormProps) => {
  return (
    <div className='flex flex-col md:flex-row justify-between  items-start px-3 md:items-center my-10 md:my-7  lg:px-10'>
      <ISearch handleSearch={handleSearch} toggle={toggle} />
      <Dropdown handleSelect={handleSelect} toggle={toggle}  />
    </div>
  )
}

export default Form