import { UPDATE_MEETING } from '../actions/meeting-actions'

export default function meetingReducer(state = [],
  {type, payload }){
    switch (type){
      case UPDATE_MEETING:
        return payload;
      default:
        return state;
    }
  }