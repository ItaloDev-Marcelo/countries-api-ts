import ModeToggle from "./ModeToggle"

type modeProps  = {
  DarkMode: () => void,
  toggle: boolean
}

const Header = ({DarkMode, toggle}:modeProps) => {
  
    console.log(toggle)
     
    return (
    <header className="flex flex-row justify-between p-4 lg:px-10 h-[75px] xl:h-[90px]  shadow items-center mb-4">
       <a href='#index.html' className='font-black'><h1>Where in the world?</h1></a>
       <ModeToggle DarkMode={DarkMode}   />
    </header>
  )
}

export default Header