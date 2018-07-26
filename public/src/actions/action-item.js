export const ADD_ACTIONITEM = 'actionItem:addActionItem'

export function addActionItem(newActionItem){
  return {
    type: ADD_ACTIONITEM,
    payload:{
      actionItem: newActionItem
    }
  }
}
