import { ReactComponent as PeopleIcon } from '../assets/images/people-icon.svg'
import { ReactComponent as PlanetIcon } from '../assets/images/planet-icon.svg'
import { ReactComponent as StarshipIcon } from '../assets/images/starship-icon.svg'
import { peopleColumns } from './peopleColumns'
import { planetsColumns } from './planetsColumns'
import { starshipsColumns } from './starshipsColumns'

export const appCommonData = [
  {
    name: 'people',
    icon: PeopleIcon,
    columns: peopleColumns,
  },
  {
    name: 'planets',
    icon: PlanetIcon,
    columns: planetsColumns,
  },
  {
    name: 'starships',
    icon: StarshipIcon,
    columns: starshipsColumns,
  }]
