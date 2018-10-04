import {
  FETCH_INFO
} from "../actions/action_types";

const initialState ={
        data: 1,
        error: {}
      };

export function infoReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INFO: {
      return {
        data: action.payload.data,
        error: {}
      };
    }
    default: {
      return state;
    }
  }
}