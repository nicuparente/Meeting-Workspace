export const UPDATE_MEETING = 'meeting:updateMeeting'

export function updateMeeting(newMeeting){
  return {
    type: UPDATE_MEETING,
    payload:{
      meeting: newMeeting
    }
  }
}