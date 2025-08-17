import type { ButtonProps } from "../types/ButtonType"

const Button = ({name, handleSelect}:ButtonProps) => {
  return <button onClick={() => handleSelect(name)}>{name}</button>
}

export default Button