import { all, takeEvery, take } from "redux-saga/effects";


//@BlueprintReduxSagaImportInsertion
import EmailAuth129459Saga from '../features/EmailAuth129459/redux/sagas';
import CalendarView129457Saga from '../features/CalendarView129457/redux/sagas';

function* helloSaga() {
  console.log("Hello from saga!");
}

export function* mainSaga() {
  yield all([
    takeEvery("TEST/ALO", helloSaga),
    // other sagas go here


    //@BlueprintReduxSagaMainInsertion
EmailAuth129459Saga,
CalendarView129457Saga,
    
  ]);
}