import Button from "../components/Button";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownProps {handleSelect: (value: string) => void, toggle: boolean }
const Dropdown = ({handleSelect, toggle}:DropdownProps ) => {
  return (
    <details className="dropdown w-50">
      <summary className={`btn my-1 w-50 border-0 outline-0 flex flex-row shadow justify-between ${toggle ? 'bg-Blue-900 text-Grey-50' : 'bg-White-zero text-Grey-950 '} `}>Filter by Region <RiArrowDropDownLine size={15}/> </summary>
      <ul className={`menu dropdown-content rounded-box z-1 w-50 p-2 shadow mt-2 ${toggle ? 'bg-Blue-900 text-Grey-50' : 'bg-White-zero  text-Grey-950 '}`}>
        <li><Button name="Africa"  handleSelect={handleSelect}/></li>
        <li><Button name="Americas" handleSelect={handleSelect} /></li>
        <li> <Button name="Asia" handleSelect={handleSelect} /></li>
        <li><Button name="Europe" handleSelect={handleSelect} /></li>
        <li><Button name="Oceania" handleSelect={handleSelect} /></li>
      </ul>
    </details>
  );
};

export default Dropdown;
