import React from 'react'
import {
  Typography,
  SvgIcon,
  Box,
  Grid,
} from '@material-ui/core'
import { ReactComponent as NotFound } from '../../assets/images/not-found-icon.svg'

export const NotExistedPage = () => (
  <Box
    component={Grid}
    container
    justify="center"
    alignItems="center"
    direction="column"
    mt={5}
  >
    <Box
      component={SvgIcon}
      fontSize="200px"
    >
      <NotFound />
    </Box>
    <Typography variant="h3">404 Not Found</Typography>
  </Box>
)
