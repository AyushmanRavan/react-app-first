import { all } from 'redux-saga/effects'
import watcherAllSubscribers from './subscriber-saga'
// Export all sagas

export default function* rootSaga() {
  yield all([
      // register all watcher saga functions here.
      watcherAllSubscribers(), 
  ])
}

// export default rootSaga;

// import { takeLatest, all } from 'redux-saga/effects';
// export default function *watchAll() {
  // yield all([
    // yield takeLatest(LOAD_TODOS, loadTodos);
    // yield takeLatest(CREATE_TODOS, createTodos);
  // ]);
// }


// import {all} from 'redux-saga/effects';
// import loginScreenSaga from 'screens/Login/saga';
// import signupScreenSaga from 'screens/Register/saga';
// function* rootSaga() {
//  yield all([loginScreenSaga(), signupScreenSaga()]);
// }



// const saveState = (state) => {
//   if(state.favorites.length !== 0){
//     localStorage.setItem("state", JSON.stringify(state));
//   }
// };

// const getState = () => {
//   try{
//     const s = localStorage.getItem("state");
//     if (s  === null) return undefined;
//     return JSON.parse(s);
//   }catch(e){
//     return undefined;
//   }
// };

// const initialState = getState();
// const store = createStore(rootReducer,initialState, applyMiddleware(thunk));
// store.dispatch(fetchData());

// store.subscribe(() => {
//   saveState({
//     favorites: store.getState().favorites
//   })
// })
