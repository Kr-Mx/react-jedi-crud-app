import * as R from 'ramda'
import { ReactComponent as PeopleIcon } from '../assets/images/people-icon.svg'
import { ReactComponent as PlanetIcon } from '../assets/images/planet-icon.svg'
import { ReactComponent as StarshipIcon } from '../assets/images/starship-icon.svg'

export const linksData = [
  { name: 'people', icon: PeopleIcon },
  { name: 'planets', icon: PlanetIcon },
  { name: 'starships', icon: StarshipIcon }]
export const capitalize = R.replace(/^./, R.toUpper)
