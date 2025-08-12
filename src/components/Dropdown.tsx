import Button from "./Button";
import { RiArrowDropDownLine } from "react-icons/ri";

interface DropdownProps {handleSelect: (value: string) => void}
const Dropdown = ({handleSelect}:DropdownProps ) => {
  return (
    <details className="dropdown w-50">
      <summary className="btn my-1 w-50 bg-base-100 flex flex-row justify-between">Filter by Region <RiArrowDropDownLine size={15}/> </summary>
      <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-50 p-2 shadow-sm">
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
