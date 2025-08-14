import { FaArrowLeft } from "react-icons/fa6";
// import type { ApiTypes } from "../types/ApiType";


interface DetailsProps {
    name: string,
    nativeName: string,
    population: number,
    region: string,
    subregion:string,
    currencies:string,
    capital: string,
    svg: string, 
    topLevelDomain: string[], 
    languages: string[],
    borders: string[],
     HideDetails: () => void}


const DetailsSection = ({name,nativeName,population,region,subregion,currencies,capital,svg, 
    topLevelDomain, languages, borders, HideDetails}:DetailsProps) => {

//  const {name,nativeName,population,region,subregion,currencies,capital,flags, topLevelDomain, languages, borders} = data;

  return (
    <section className="w-full h-50vh bg-red absolute top-[20%] left-0 z-10000">
        <button onClick={HideDetails}> <FaArrowLeft size={30} />  Back</button>
        <div>
            <figure>
                 <img src={svg} alt={name} />
            </figure>
            <section>
                <h3>{}</h3>
                <ul>
                    <li>Native Name: {nativeName}</li>
                    <li>Population: {population}</li>
                    <li>Region: {region}</li>
                    <li>Sub Region: {subregion}</li>
                    <li>Capital: {capital}</li>
                </ul>

                <ul>
                    <li>Top Level Domain: {topLevelDomain}</li>
                    <li>Currencies: {currencies}</li>
                    <li>Languages: 
                      <div>
                          {
                          languages.map((item) => (
                            <div>
                                {item}
                            </div>
                          ))
                          }
                     </div>     
                    </li>
                </ul>

                <article>
                    <h4>Border Countries: </h4>
                        <div>
                          {
                          borders?.map((item) => (
                            <div>
                               {item}
                            </div>
                          ))
                          }
                     </div>    
                </article>
            </section>
        </div>

    </section>
  )
}

export default DetailsSection