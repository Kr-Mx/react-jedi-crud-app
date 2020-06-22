import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Box, Grid, CircularProgress } from '@material-ui/core'
import { appCommonData } from '../../../constants'
import {
  fetchData,
  filterPageData,
  getPageDataItem,
  handleSubmitPageData,
} from '../../../helpers'
import { Header } from './Header'
import { Table } from '../Table'
import { FormPage } from '../../pages/FormPage'
import { ErrorSnackbar } from '../Error'

export const Page = ({ state, setState, sectionName }) => {
  const { columns } = appCommonData.find((data) => data.name === sectionName)
  const [isEditMode, setEditMode] = useState(false)
  const [pending, setPending] = useState(false)
  const [error, setError] = useState(false)
  const deleteRow = filterPageData(state, setState)
  const findRow = getPageDataItem(state)
  const handleSubmitData = handleSubmitPageData(state, setState)
  useEffect(fetchData(sectionName, [state, setState], setPending, setError, columns), [sectionName])
  useEffect(() => {
    localStorage.setItem(sectionName, JSON.stringify(state))
  }, [state, sectionName])
  return (
    <Box
      component={Grid}
      container
      direction="column"
      justify="center"
      alignItems="center"
      wrap="nowrap"
      height="calc(100% - 64px)"
    >
      <Route exact path={`/${sectionName}`}>
        <Header sectionName={sectionName} />
        <ErrorSnackbar error={error} setError={setError} />
        {pending ? <Box component={CircularProgress} mt={5} />
          : (
            <Table
              tableData={state}
              sectionName={sectionName}
              deleteRow={deleteRow}
              setEditMode={setEditMode}
            />
          )}
      </Route>
      <Route path={`/${sectionName}/:id`}>
        <FormPage
          handleSubmitData={handleSubmitData}
          sectionName={sectionName}
          isEditMode={isEditMode}
          findRow={findRow}
          columns={columns}
        />
      </Route>
    </Box>
  )
}
