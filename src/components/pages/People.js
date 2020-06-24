import React from 'react'
import { connect } from 'react-redux'
import { Page } from '../common/Page'
import { mapStateToProps, mapDispatchToProps } from '../../helpers/containerHelpers'

const People = (props) => (<Page pageData={props} />)

export default connect(mapStateToProps, mapDispatchToProps)(People)
