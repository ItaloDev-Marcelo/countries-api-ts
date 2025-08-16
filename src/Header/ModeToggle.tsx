import { FaRegMoon } from "react-icons/fa";

type modeProps  = {
  DarkMode: () => void
}

const ModeToggle = ({DarkMode}:modeProps) => {
  return  <button onClick={DarkMode} className='flex border-0 outline-0 p-1 font-semibold'> <FaRegMoon size={27}/> Dark Mode </button>
}

export default ModeToggle