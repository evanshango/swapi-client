export interface IResponse {
  count: number
  prevPage: number
  nextPage: number
  content: IPersonList[]
}

export interface IPersonList{
  id: number
  name: string
  height: string
  mass: string
  gender: string
  planet: string
  films: IFilm[]
}

export interface IPerson {
  name: string
  height: string
  mass: string
  gender: string
  hairColor: string
  skinColor: string
  birthYear: string
  eyeColor: string
  created: string
  edited: string
  planet: IPlanet
  films: IFilm[]
}

export interface IFilm {
  url: string
}

export interface IPlanet{
  name: string
  population: string
  terrain: string
  climate: string
  diameter: string
  gravity: string
}
