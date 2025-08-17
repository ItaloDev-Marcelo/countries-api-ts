export interface FormProps  {
  handleSearch: (e: React.ChangeEvent<HTMLInputElement>) => void, 
  handleSelect: (value: string) => void,
  toggle: boolean
}