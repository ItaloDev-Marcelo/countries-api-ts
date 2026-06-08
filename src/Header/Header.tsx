import type { modeProps } from "../types/HeaderType"
import ModeToggle from "./ModeToggle"

const Header = ({DarkMode, toggle}:modeProps) => {
  
    return (
    <header className={`flex flex-row justify-between lg:gap-10 p-4 lg:px-15  h-[75px] xl:h-[90px]  items-center transition duration-700 ease-in-out mb-4 ${toggle ? 'bg-Blue-950 text-white shadow-2xl ' : 'bg-White-zero text-Grey-950 shadow'}`}>
      
       <a href='#index.html'><span className='font-bold text-Grey-950 lg:text-2xl'>Where in the world?</span></a>
       <ModeToggle DarkMode={DarkMode}   />
    </header>
  )
}

export default Header