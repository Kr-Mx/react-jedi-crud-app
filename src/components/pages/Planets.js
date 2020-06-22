import React, { useState } from 'react'
import { getDataFromLocalStorage } from '../../helpers'
import { Page } from '../common/Page'
import { useSectionName } from '../../helpers/hooks'

export const Planets = () => {
  const sectionName = useSectionName()
  const [planets, setPlanets] = useState(getDataFromLocalStorage(sectionName))
  return (
    <Page
      sectionName={sectionName}
      state={planets}
      setState={setPlanets}
    />
  )
}
