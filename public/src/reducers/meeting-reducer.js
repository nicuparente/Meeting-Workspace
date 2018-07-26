import { UPDATE_MEETING } from '../actions/meeting-actions';
import { ADD_ACTIONITEM } from '../actions/action-item';

export default function meetingReducer(state = {},
  {type, payload }){
    switch (type){
      case UPDATE_MEETING:
        return payload;
      case ADD_ACTIONITEM:
        return payload;
      default:
        return state;
    }
  }