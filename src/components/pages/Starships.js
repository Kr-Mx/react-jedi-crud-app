import React from 'react'
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../helpers/containerHelpers'
import { Page } from '../common/Page'

const Starships = (props) => (<Page pageData={props} />)

export default connect(mapStateToProps, mapDispatchToProps)(Starships)
