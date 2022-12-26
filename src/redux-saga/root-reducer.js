import { combineReducers } from 'redux';
import subscriberReducer from './subscriber-reducers';

// export const rootReducer = combineReducers({})

export default combineReducers({
    subscriber: subscriberReducer,
});

// useSelector() allows you to extract data from the Redux store state
// const userData = useSelector(state => state.Auth.user);

// const dispatch = useDispatch()
// const onSubmit = (values) => dispatch(loginUser(values))