import Form from "../Form/FormContainer"
import Header from '../Header/Header'
import React, { useState } from "react"
import Data from '../data/data.json'
import MainWrapper from "../components/MainWrapper"
import Card from "../components/Card"
import { FaArrowLeft } from "react-icons/fa6";
const CountryPageLayout = () => {

   const [toggle, setToggle] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [currentSelectedCard, setCurrentSelectedCard] = useState<string>('')
    const [details, setDetails] = useState(false)
   //  let countriesData = Data;
    const DarkMode  = () => setToggle(prevToggle => !prevToggle)
   // const SearchCountryName = Data.
   // filter((item) => item.name === inputValue || item.region === selectValue);

   function FilteringData(input:string, select:string) {
     if(input.length == 0 && select.length == 0) {
        return Data
     }else if(input.length > 0) {
        return  Data.filter((item) => item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase() ));
     }else {
       return  Data.filter((item) => item.region === selectValue);
     }
   }


   const Result = FilteringData(inputValue,selectValue)


  
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
       const {value} = e.target;
       setInputValue(value)
    }
  
    const handleSelect = (value: string) => {
       setSelectValue(value)
    }

   
   const handleDatails = (index:string) => {
       setCurrentSelectedCard(index)
       setDetails(true)
   }


   const selectedCard = (selectedItem:string) => Data.find((item) => item.numericCode === selectedItem )

   const selected =  selectedCard(currentSelectedCard)

   


   const HideDetails = ()  =>  {
      setDetails(false)
      setCurrentSelectedCard('')
   }
   
   
   console.log(currentSelectedCard, details)
    

  return (
    <div>
        <Header toggle={toggle} DarkMode={DarkMode} />
        <div className='mt-2 xl:mt-3'>
          {
            !details && <><Form handleSearch={handleSearch}  handleSelect={handleSelect} />
           <MainWrapper>
                {
                  Result.map((item) => (
                        <Card
                        id={item.numericCode} 
                        name={item.name} 
                        population={item.population}   
                        region={item.region}
                        capital={item.capital}
                        img={item.flags.png}
                        handleDatails={handleDatails}
                        />
                  ))
                }
           </MainWrapper></>
          }
         
           {selected && (
              <section className="w-full h-50vh bg-red absolute top-[20%] left-0 z-10000">
                     <button onClick={HideDetails}> <FaArrowLeft size={30} />  Back</button>
                     <div>
                         <figure>
                              <img src={selected.flags.svg} alt={selected.name} />
                         </figure>
                         <section>
                             <h3>{}</h3>
                             <ul>
                                 <li>Native Name: {selected.nativeName}</li>
                                 <li>Population: {selected.population}</li>
                                 <li>Region: {selected.region}</li>
                                 <li>Sub Region: {selected.subregion}</li>
                                 <li>Capital: {selected.capital}</li>
                             </ul>
             
                             <ul>
                                 <li>Top Level Domain: {selected.topLevelDomain}</li>
                                 <li>Currencies: {selected.currencies?.map((item) => item.code)}</li>
                                 <li>Languages: 
                                   <div>
                                       {
                                       selected.languages.map((item) => (
                                         <div>
                                             {item.name}
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
                                       selected.borders?.map((item) => (
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
           )}
        </div>
    </div>
  )
}

export default CountryPageLayout