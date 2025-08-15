import Form from "../Form/FormContainer"
import Header from '../Header/Header'
import React, { useState } from "react"
import Data from '../data/data.json'
import MainWrapper from "../components/MainWrapper"
import Card from "../components/Card"
import DetailsSection  from '../components/DetailsSection'
const CountryPageLayout = () => {

   const [toggle, setToggle] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
    const [currentSelectedCard, setCurrentSelectedCard] = useState<string>('')
    const [details, setDetails] = useState(false)
    const [showAll, setShowAll] = useState(false)
  
    const DarkMode  = () => setToggle(prevToggle => !prevToggle)
  

   function FilteringData(input:string, select:string) {
     if(input.length == 0 && select.length == 0) {
        return Data
     }else if(input.length > 0) {
        return  Data.filter((item) => item.name.toLocaleLowerCase().includes(inputValue.toLocaleLowerCase() ));
     }else {
       return  Data.filter((item) => item.region === selectValue);
     }
   }

   const handleMore = () => {
      setShowAll(true)
   }

   const Result = FilteringData(inputValue,selectValue)

   const DisplayCards = showAll ? Result : Result.slice(0, 8)

  
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
        <div className='mt-2 xl:mt-3 '>
          {
            !details && <><Form handleSearch={handleSearch}  handleSelect={handleSelect} />
           <MainWrapper>
                {
                  DisplayCards.map((item) => (
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
            </MainWrapper>
                <div className='w-full flex justify-center my-4 '> 
                   <button onClick={handleMore} className="text-center font-black h-[45px] w-[100px] my-3.5 bg-amber-100 rounded-[5px]">More</button>
          </div>
             </>
          }
         
           {selected && (
               <DetailsSection HideDetails={HideDetails}  name={selected.name}
  nativeName={selected.nativeName}
  population={selected.population}
  region={selected.region}
  subregion={selected.subregion}
  currencies={selected.currencies ?? []}
  capital={selected.capital ?? ''}
  svg={selected.flags.svg}
  topLevelDomain={selected.topLevelDomain}
  languages={selected.languages ?? []}
  borders={selected.borders ?? []} />
           )}
        </div>
    </div>
  )
}

export default CountryPageLayout