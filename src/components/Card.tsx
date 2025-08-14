
interface CardProps {
  name: string,
  population: number,
   region: string,
   capital:string | undefined,
   img:string,
   id: string,
    handleDatails: (index:string) => void,

}

const Card = ({name, population,region,capital,img,id ,  handleDatails}:CardProps) => {


  return (
   <div onClick={() =>  handleDatails(id)} className="card bg-base-100  w-[350px] md:w-[370px] tb:w-[445px]  xl:w-[370px]  nt:w-75 m-2 shadow-sm " key={id}>
  <figure>
    <img
      src={img}
      alt={name} 
      className='w-full h-[200px]'
      />
  </figure>
  <div className="card-body h-[250px]">
    <h2 className="card-title font-black">{name}</h2>
    <div className="mt-3">
      <p className="my-2"> <strong>Population</strong>: {population}  </p>
   <p className="my-2"> <strong>Region</strong>: {region}  </p>
   <p className="my-2"> <strong>Capital</strong>: {capital}  </p>
    </div>
  </div>
</div>
  )
}

export default Card