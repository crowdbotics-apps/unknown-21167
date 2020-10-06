import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import EmailAuth129459Reducer from '../features/EmailAuth129459/redux/reducers';
import CalendarView129457Reducer from '../features/CalendarView129457/redux/reducers';

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
EmailAuth129459: EmailAuth129459Reducer,
CalendarView129457: CalendarView129457Reducer,

});