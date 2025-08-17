interface Currency {
  code: string,
  name: string,
  symbol: string,
}

interface Language {
  name: string,
}

export interface DetailsProps {
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
