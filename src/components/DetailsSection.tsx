import { FaArrowLeft } from "react-icons/fa6";
interface Currency {
  code: string,
  name: string,
  symbol: string,
}

interface Language {
  name: string,
}

interface DetailsProps {
  name: string,
  nativeName: string,
  population: number,
  region: string,
  subregion: string,
  currencies: Currency[],
  capital: string,
  svg: string,
  topLevelDomain: string[],
  languages: Language[],
  borders: string[],
  HideDetails: () => void,
  toggle: boolean
}

const DetailsSection = ({
  name,
  nativeName,
  population,
  region,
  subregion,
  currencies,
  capital,
 svg,
  topLevelDomain,
  languages,
  borders,
  HideDetails, 
  toggle
}: DetailsProps) => {
  return (
    <section className={`w-full h-[100%] pt-4  z-10000 p-2 flex felx-col lg:flex-row ${toggle ? 'bg-Blue-950  text-white' : ' text-Grey-950 bg-Grey-50'} `}>
      <div className="flex flex-col xl:flex-row justify-between ">
        <div>
          <button
            className="flex items-center justify-center border-1 w-[100px] h-[40px] ml-2 lg:ml-13"
            onClick={HideDetails}
          >
            {" "}
            <FaArrowLeft size={15} className='mr-2' /> Back
          </button>

          <figure className="flex flex-col w-full   xl:w-[500px] p-3 lg:ml-7 mt-10">
            <img src={svg} alt={name} />
          </figure>
        </div>
        <section className="lg:w-[670px] p-2.5 lg:p-15 lg:mt-10 xl:ml-4 ">
          <h3 className="font-black text-[1.4em] my-4">{name}</h3>
          <div className="md:grid md:grid-cols-2">
            <ul className="my-5 ">
              <li className="my-2.5">
                <span className="font-semibold">Native Name:</span>{" "}
                {nativeName}
              </li>
              <li className="my-2.5">
                <span className="font-semibold">Population:</span>{" "}
                {population}
              </li>
              <li className="my-2.5">
                <span className="font-semibold">Region:</span> {region}
              </li>
              <li className="my-2.5">
                <span className="font-semibold">Sub Region:</span>{" "}
                {subregion}
              </li>
              <li className="my-2.5">
                <span className="font-semibold">Capital:</span>{" "}
                {capital}
              </li>
            </ul>

            <ul className="mt-10 mb-4 lg:mt-7">
              <li className="my-2.5">
                <span className="font-semibold">Top Level Domain:</span>{" "}
                {topLevelDomain}
              </li>
              <li className="my-2.5">
                <span className="font-semibold">Currencies:</span>{" "}
                {currencies?.map((item) => item.code)}
              </li>
              <li className="my-2.5 flex">
                <span className="font-semibold mr-1">Languages: </span>
                <ul className="flex">
                  {languages.map((item) => (
                    <li>{item.name},</li>
                  ))}
                </ul>
              </li>
            </ul>
          </div>
          <article className="w-auto md:w-[400px] tb:w-[600px] nt:w-[597px] mt-4">
            <h4 className="mb-5">
              {borders.length > 0 && <span className="font-black ">Border Countries:</span>}
            </h4>
            <div className="grid grid-cols-2 tb:grid-cols-3 lg:grid-cols-4 items-start gap-2 lg:gap-col-2">
              {borders?.map((item) => (
                <div className="w-[150px] md:w-[190px] lg:w-[130px] flex flex-col text-center justify-center border-1 h-[40px] font-bold">
                  {item}
                </div>
              ))}
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default DetailsSection;
