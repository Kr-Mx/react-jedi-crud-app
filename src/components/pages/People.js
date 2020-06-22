import React, { useState } from 'react'
import { getDataFromLocalStorage } from '../../helpers'
import { Page } from '../common/Page'
import { useSectionName } from '../../helpers/hooks'

export const People = () => {
  const sectionName = useSectionName()
  const [people, setPeople] = useState(getDataFromLocalStorage(sectionName))
  return (
    <Page
      sectionName={sectionName}
      state={people}
      setState={setPeople}
    />
  )
}
