import { put, takeEvery, take, fork} from 'redux-saga/effects'
import {eventChannel} from 'redux-saga'
import {fetchUsers} from '../../apiCalls/apiCalls'
import {updateUsers} from '../actions/action'
import { FETCH_USERS } from '../actions/actionTypes'
import {database} from './../../firebase/firebase'

/**
 * Transforms fetched data from database
 * to an array of objects while ommiting
 * the pushID of each objects
 * @param {object} data
 * @return {array}  
 */
function transformDatabaseData(data){
  let users =  Object.entries(data).map((user, index )=> {
    const [key, value] = user;
    return {...value, key: index}
  })
  return users;
}

function* startListener() {

  const channel = new eventChannel(emiter => {
    const listener = database.ref('/users').on("value", snapshot => {
      emiter({ data: snapshot.val() || {} });
    });

    return () => {
      listener.off();
    };
  });

  while (true) {
    const { data } = yield take(channel);
    const updatedUsers =  yield transformDatabaseData(data)
    yield put(updateUsers(updatedUsers))
  }
}


export default function* rootSaga() {
  yield fork(startListener)
}