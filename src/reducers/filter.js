import { FILTER_ITEM } from 'CONSTANTS/actionTypes'

const initialItems = ''

export default function filter(state = initialItems, action) {
  switch (action.type) {
    case FILTER_ITEM:
    return action.filterItem
    default:
    return state
  }
}
