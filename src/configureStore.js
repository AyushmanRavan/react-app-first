import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
// https://www.bacancytechnology.com/blog/integrate-redux-saga-in-react-native-app-part-2
import rootReducer from './redux-saga/root-reducer';
import rootSaga from './redux-saga/subscriber-saga'

export default function configureStore() {
  // Define middlewares to include
  const sagaMiddleware = createSagaMiddleware();

  // Add all middlewares into an array
  const middleware = [sagaMiddleware];

  // Add the Redux dev tools and middleware code together
  const enhancers = compose(
    applyMiddleware(...middleware),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
  
  // const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  
  // const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));

  // Create a store with the reducers and middleware
  // const store = createStore(rootReducer, enhancers);
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  // Run the Redux Saga middleware listeners
  sagaMiddleware.run(rootSaga);

  return store;
}
// export default configureStore;

// export const createAction = (type, payload) => {
//     if (!type) {
//       throw new Error('Action Type must be truthy');
//     }
//     if (payload && payload.type) {
//       throw new Error(
//         "Action payload cannot have a 'type' field - it would overwrite the Action's type"
//       );
//     }
//     return { type, ...payload };
//   };


// getUserdData action method
// export const getUserdDataRequest = (requestBody) =>
//     createAction(GETUSERDATA_REQUEST, { requestBody });
// export const getUserdDataStarted = () =>
//     createAction(GETUSERDATA_STARTED);
// export const getUserdDataSuccess = (response) =>
//     createAction(GETUSERDATA_SUCCESS, { response });
// export const getUserdDataFailure = () =>
//     createAction(GETUSERDATA_FAILURE);