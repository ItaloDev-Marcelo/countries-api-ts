import type { modeProps } from "../types/HeaderType"
import ModeToggle from "./ModeToggle"

const Header = ({DarkMode, toggle}:modeProps) => {
  
    return (
    <header className={`flex flex-row justify-between p-4 lg:px-10 h-[75px] xl:h-[90px]  items-center transition duration-700 ease-in-out mb-4 ${toggle ? 'bg-Blue-950 text-white shadow-2xl ' : 'bg-White-zero text-Grey-950 shadow'}`}>
       <a href='#index.html' className='font-black'><h1>Where in the world?</h1></a>
       <ModeToggle DarkMode={DarkMode}   />
    </header>
  )
}

export default Header