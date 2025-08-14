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
              <section className="w-full h-50vh bg-red absolute top-[20%] left-0 z-10000 p-2 flex felx-col lg:flex-row">
                      <div className="flex flex-col lg:flex-row justify-between ">
                          <div>
                            <button className="flex items-center justify-center border-1 w-[100px] h-[50px] ml-2 lg:ml-13" onClick={HideDetails}> <FaArrowLeft size={20} />  Back</button>
                  
                         <figure className='flex flex-col w-[350px] md:w-[370px] tb:w-[445px]  xl:w-[550px] p-3 lg:ml-10 mt-10'>
                              <img src={selected.flags.svg} alt={selected.name} />
                         </figure>
                          </div>
                         <section className="lg:w-[670px] p-2.5 lg:p-15 lg:mt-10 lg:ml-4 ">
                              <h3 className="font-black text-[1.4em] my-4">{selected.name}</h3>
                             <div className="lg:grid lg:grid-cols-2">
                          
                             <ul className="my-5 ">
                                 <li className="my-2.5"><span className="font-semibold">Native Name:</span> {selected.nativeName}</li>
                                 <li className="my-2.5"><span className="font-semibold">Population:</span> {selected.population}</li>
                                 <li className="my-2.5"><span className="font-semibold">Region:</span> {selected.region}</li>
                                 <li className="my-2.5"><span className="font-semibold">Sub Region:</span> {selected.subregion}</li>
                                 <li className="my-2.5"><span className="font-semibold">Capital:</span> {selected.capital}</li>
                             </ul>

                               <ul className="mt-10 mb-4 lg:mt-7">
                                 <li className="my-2.5"><span className="font-semibold">Top Level Domain:</span> {selected.topLevelDomain}</li>
                                 <li className="my-2.5"><span className="font-semibold">Currencies:</span> {selected.currencies?.map((item) => item.code)}</li>
                                 <li className="my-2.5 flex"  ><span className="font-semibold mr-1">Languages: </span>
                                     <ul className='flex'>
                                       {
                                       selected.languages.map((item) => (
                                         <li>
                                             {item.name},
                                         </li>
                                       ))
                                       }
                                  </ul> 
                                 </li>
                             </ul>
             
                             </div>
                             <article className="w-auto">
                                 <h4 className="mb-5"><span className="font-semibold ">Border Countries:</span> </h4>
                                     <div className="grid grid-cols-2 lg:grid-cols-4 items-start gap-2 lg:gap-col-2">
                                       {
                                       selected.borders?.map((item) => (
                                         <div className="w-[150px] lg:w-[130px] flex flex-col text-center justify-center border-1 h-[40px] font-bold">
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