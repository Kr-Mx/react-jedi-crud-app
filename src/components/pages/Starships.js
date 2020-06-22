import React, { useState } from 'react'
import { getDataFromLocalStorage, useSectionName } from '../../helpers'
import { Page } from '../common/Page'

export const Starships = () => {
  const sectionName = useSectionName()
  const [starships, setStarships] = useState(getDataFromLocalStorage(sectionName))
  return (
    <Page
      sectionName={sectionName}
      state={starships}
      setState={setStarships}
    />
  )
}
