import type { CardProps } from "../types/CardType"


const Card = ({name, population,region,capital,img,id,handleDatails, toggle}:CardProps) => {


  return (
   <div onClick={() =>  handleDatails(id)} className={`card   w-[97%] md:w-[370px] tb:w-[445px] 
    xl:w-[370px]  nt:w-75 m-2 shadow  transition duration-500 ease-in-out ${toggle ? 'bg-Blue-900 text-white ' : 'bg-Grey-50 text-Grey-950'}`} key={id}>
  <figure>
    <img
      src={img}
      alt={name} 
      className='w-full h-[200px]'
      />
  </figure>
  <div className="card-body h-[250px] nt:h-[200px]">
    <h2 className="card-title font-black">{name}</h2>
    <div className="mt-3">
      <p className="my-2 text-[14px]"> <strong>Population</strong>: {population}  </p>
   <p className="my-2 text-[14px]"> <strong>Region</strong>: {region}  </p>
   <p className="my-2 text-[14px]"> <strong>Capital</strong>: {capital}  </p>
    </div>
  </div>
</div>
  )
}

export default Card