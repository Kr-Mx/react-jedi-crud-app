import React, { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { Box, Grid, CircularProgress } from '@material-ui/core'
import { appCommonData } from '../../../constants'
import { getPageDataItem } from '../../../helpers'
import { Header } from './Header'
import { Table } from '../Table'
import { FormPage } from '../../pages/FormPage'
import { ErrorSnackbar } from '../Error'

export const Page = React.memo(({ pageData }) => {
  const {
    deleteRow,
    updateRow,
    insertRow,
    fetchData,
    clearFetchError,
    data: state,
    error,
    pending,
    sectionName,
  } = pageData
  const { columns } = appCommonData.find((data) => data.name === sectionName)
  const [isEditMode, setEditMode] = useState(false)
  const findRow = getPageDataItem(state)
  useEffect(() => {
    if (!state.length) { fetchData(sectionName, columns) }
  })
  useEffect(() => {
    localStorage.setItem(sectionName, JSON.stringify(state))
  })
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
        <ErrorSnackbar error={error} clearFetchError={clearFetchError} />
        {pending ? <Box component={CircularProgress} mt={5} />
          : (
            <Table
              tableData={state}
              sectionName={sectionName}
              deleteRow={deleteRow}
              updateRow={updateRow}
              setEditMode={setEditMode}
            />
          )}
      </Route>
      <Route path={`/${sectionName}/:id`}>
        <FormPage
          updateRow={updateRow}
          insertRow={insertRow}
          sectionName={sectionName}
          isEditMode={isEditMode}
          findRow={findRow}
          columns={columns}
        />
      </Route>
    </Box>
  )
})
