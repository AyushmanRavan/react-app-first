import { call, put, takeEvery } from 'redux-saga/effects';
import * as subscriberAction from './subscriber-actions';
import * as subscriberActionType from './subscriber-action-types';
import * as apiCall from '../services/service-api'

// Worker sagas : Respond to the actions that are caught by the watcher sagas
function* workerAllSubscribers(action) {
    try {
      // yield put(subscriberAction.getAllSubscriberRequest())
      // const {  email, password } = action;
      const subscribedData = yield call(apiCall.getAll,"posts");
      // const user = yield call(api.postLoginUser, "url path", action.payload)
      yield put(subscriberAction.getAllSubscriberSuccess(subscribedData.data));
    } catch (error) {
      yield put(subscriberAction.getAllSubscriberError(error));
    }
}

// Watcher sagas : Listen for an action and run the appropriate Worker saga
function* watcherAllSubscribers() {
  // Allows concurrent fetches of users
  yield takeEvery(subscriberActionType.GET_ALL_SUBSCRIBER_REQUEST, workerAllSubscribers);
  // Does not allow concurrent fetches of users
  // yield takeEvery(subscriberActionTypes.UPDATE_SUBSCRIBER, workUpdateSubscriber);
}

export default watcherAllSubscribers;  

// takeLatest(action, saga, ...args) — starts a new saga (generator function) task in the background when the specified action is dispatched. If a saga task was started previously (on the last action dispatched before the actual action), and if this task is still running, the task will be cancelled. Also you can pass arguments to the saga task.

//  put(action) — dispatch an action to the redux store.

  // call(fn, ...args) — calls the function fn with the specified args. The function can be either normal or a generator function.if the result is a promise object it waits for it to resolve and returns what the promise resolved to.



//   export const fetchData = () => {
//     return (dispatch) => {
//         return axios.get(apiUrl)
//             .then(response => {
//                 return response.data
//             })
//             .then(data => {
//                 dispatch({
//                     type: ADD_FETCHED_DATA,
//                     payload: data
//                 })
//             })
//             .catch(error => {
//                 throw (error);
//             });
//     };
// };



// export const fetchCharacter = id => async dispatch => {
//   await dispatch({ type: FETCH_CHARACTER_REQUEST, id });
//   try {
//     const response = await axios.get(
//       `https://rickandmortyapi.com/api/character/${id}`
//     );
//     return dispatch({
//       type: FETCH_CHARACTER_SUCCESS,
//       data: response.data,
//       id
//     });
//   } catch (err) {
//     return dispatch({ type: FETCH_CHARACTER_ERROR, err, id });
//   }
// };
