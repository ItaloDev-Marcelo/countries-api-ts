interface ButtonProps {
    name:string,
    handleSelect: (value: string) => void
}




const Button = ({name, handleSelect}:ButtonProps) => {
  return <button onClick={() => handleSelect(name)}>{name}</button>
}

export default Button