export interface CardProps {
  name: string,
  population: number,
   region: string,
   capital:string | undefined,
   img:string,
   id: string,
    handleDatails: (index:string) => void,
    toggle: boolean
}
