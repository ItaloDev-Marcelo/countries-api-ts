import { FaRegMoon } from "react-icons/fa";

type modeProps  = {
  DarkMode: () => void
}

const ModeToggle = ({DarkMode}:modeProps) => {
  return  <button onClick={DarkMode} className='flex'> <FaRegMoon size={30}/> Dark Mode </button>
}

export default ModeToggle