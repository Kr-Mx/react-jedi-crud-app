import { allActions } from '../store/actions'
import { fetchDataAction } from '../store/actions/fetchAction'

export const mapStateToProps = (state, ownProps) => {
  const sectionName = ownProps.location.pathname.split('/')[1]
  return ({ ...state[sectionName], sectionName })
}

export const mapDispatchToProps = (dispatch, ownProps) => {
  const actionName = ownProps.location.pathname.split('/')[1]
  const currentAction = allActions[actionName]
  return ({
    deleteRow: (id) => dispatch(currentAction.deleteRow({ id })),
    updateRow: (id, row) => dispatch(currentAction.updateRow({ id, row })),
    insertRow: (row) => dispatch(currentAction.insertRow({ row })),
    fetchData: (sectionName, columns) => dispatch(fetchDataAction(sectionName, columns)),
    clearFetchError: () => dispatch(currentAction.clearFetchError()),
  })
}
