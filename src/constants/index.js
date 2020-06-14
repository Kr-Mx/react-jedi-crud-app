import { ReactComponent as PeopleIcon } from '../assets/images/people-icon.svg'
import { ReactComponent as PlanetIcon } from '../assets/images/planet-icon.svg'
import { ReactComponent as StarshipIcon } from '../assets/images/starship-icon.svg'

export const pageData = [
  {
    name: 'people',
    icon: PeopleIcon,
    columns: ['name', 'height', 'weight', 'gender', 'born', 'id'],
  },
  {
    name: 'planets',
    icon: PlanetIcon,
    columns: ['name', 'climate', 'terrain', 'diameter', 'population', 'created', 'id'],
  },
  {
    name: 'starships',
    icon: StarshipIcon,
    columns: ['model', 'speed', 'weight', 'created', 'id'],
  }]
