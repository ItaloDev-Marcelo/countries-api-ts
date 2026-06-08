import Button from "../components/Button";
import { RiArrowDropDownLine } from "react-icons/ri";
import type { DropdownProps } from "../types/DropdownType";

const Dropdown = ({handleSelect, toggle}:DropdownProps ) => {

  const countries = ['Africa','Americas','Asia','Europe','Oceania']

  return (
    <details className="dropdown w-50 shadow-2">
      <summary className={`btn my-1 w-50 lg:h-[60px] border-0 outline-0 flex flex-row shadow font-normal  justify-between ${toggle ? 'bg-Blue-900 text-Grey-50' :
         'bg-White-zero text-black '} `}>Filter by Region <RiArrowDropDownLine size={20} /> </summary>
      <ul className={`menu dropdown-content rounded-box z-1 w-50 p-2 shadow mt-2 ${toggle ? 'bg-Blue-900 text-Grey-50' : 'bg-White-zero  text-Grey-950 '}`} role='menu'>
        {
          countries.map((countriesName, index) => (
            <li key={index} role='none'><Button name={countriesName}  handleSelect={handleSelect}/></li>
          ))
        }
      </ul>
    </details>
  );
};

export default Dropdown;
