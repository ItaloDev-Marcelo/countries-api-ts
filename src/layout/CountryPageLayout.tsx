import Form from "../Form/FormContainer"
import Header from '../Header/Header'
import React, { useState } from "react"
import Data from '../data/data.json'
import MainWrapper from "../components/MainWrapper"
import Card from "../components/Card"

const CountryPageLayout = () => {

   const [toggle, setToggle] = useState(false)
    const [inputValue, setInputValue] = useState('');
    const [selectValue, setSelectValue] = useState('');
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

   


   //  console.log(SearchCountryName)
    

  return (
    <div>
        <Header toggle={toggle} DarkMode={DarkMode} />
        <div className='mt-2 xl:mt-3'>
         <Form handleSearch={handleSearch}  handleSelect={handleSelect} />
           <MainWrapper>
                {
                  Result.map((item,index) => (
                        <Card
                        id={index} 
                        name={item.name} 
                        population={item.population}   
                        region={item.region}
                        capital={item.capital}
                        img={item.flags.png}/>
                  ))
                }
           </MainWrapper>
        </div>
    </div>
  )
}

export default CountryPageLayout