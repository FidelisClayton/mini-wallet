import * as actions from '../actions/modal'

const initialData = {
  children: null,
  props: {},
  visible: false
}

const reducer = (state = initialData, action) => {
  switch (action.type) {
    case actions.OPEN_MODAL:
      return {
        ...state,
        ...action.payload,
        visible: true
      }

    case actions.CLOSE_MODAL:
      return {
        ...state,
        visible: false
      }

    default:
      return state
  }
}

export default reducer
