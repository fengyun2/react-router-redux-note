import { ADD_ITEM, DELETE_ITEM, DELETE_ALL, FILTER_ITEM } from 'CONSTANTS/actionTypes'

/**
 * addItem
 */
export const addItem = () => {
    return dispatch => {
        setTimeout(() => dispatch({ type: ADD_ITEM }), 1000)
    }
}

/**
 * deleteItem
 */
export const deleteItem = (item) => {
    return {
        type: DELETE_ITEM,
        item
    }
}

/**
 * deleteAll
 */
export const deleteAll = () => {
    return {
        type: DELETE_ALL
    }
}

export const filterItem = e => {
  let filterItem = e.target.value

  return {
    type: FILTER_ITEM,
    filterItem
  }
}
