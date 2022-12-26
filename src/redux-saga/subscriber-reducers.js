import * as subscriberActionType from './subscriber-action-types';

const initialState = {
    loading: false,
    data: [],
    error: null,
};

//                                                             ,  action = null
export default function subscriberReducer(state = initialState, { type, payload }) {
    // const { type, payload } = action;
  switch (type) {
    case subscriberActionType.GET_ALL_SUBSCRIBER_REQUEST:
        return allSubscriberRequest(state);
    case subscriberActionType.GET_ALL_SUBSCRIBER_SUCCESS:
        return allSubscriberSuccess(state, payload);
    case subscriberActionType.GET_ALL_SUBSCRIBER_FAILED:
        return allSubscriberError(state, payload);
    default:
        return { ...state };
    }
}
// export default SubscriberReducer  

// const updateSubscriberStart = (state) => ({
//     ...state,
//     loading: true,
//     object: {},
//     data: [],
//     error: null,
// })

// const updateSubscriberSuccess = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })

// const updateSubscriberError = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })





// const createSubscriberStart = (state) => ({
//     ...state,
//     loading: true,
//     object: {},
//     data: [],
//     error: null,
// })

// const createSubscriberSuccess = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })

// const createSubscriberError = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })



// const deleteSubscriberStart = (state) => ({
//     ...state,
//     loading: true,
//     object: {},
//     data: [],
//     error: null,
// })

// const deleteSubscriberSuccess = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })

// const deleteSubscriberError = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })



// const subscriberStart = (state) => ({
//     ...state,
//     loading: true,
//     object: {},
//     data: [],
//     error: null,
// })

// const subscriberSuccess = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })

// const subscriberError = (state, payload) => ({
//     ...state,
//     loading: false,
//     object: {},
//     data: [],
//     error: null,
// })



function allSubscriberRequest(state){
  return {
        ...state,
        loading: true,
        data: [],
        error: null,
  }  
}

function allSubscriberSuccess(state, payload){
   return { 
        ...state,
        loading: false,
        data: [...payload],
        error: null,
   }
}

function allSubscriberError(state, payload){
    return {
        ...state,
        loading: false,
        data: [],
        error: payload,
    }
}


// function subscriberReducer(state = initialState, {type,payload}) {}
// export default exampleReducer

// getUsersSlice: (state, action) => {
//     state = action.payload
//     return state
// },
// addUserSlice: (state, action) => {
//     state.push(action.payload)
//     return state
// },
// editUserSlice: (state, action) => {
//     state = state.map(i => i.id == action.payload.id ? action.payload : i)
//     return state
// },
// deleteUserSlice: (state, action) => {
//     state = state.filter(i => i.id !== action.payload)
//     return state
// }




// export default function appReducer(state, action) {
//     switch (action.type) {
//       case "ADD_EMPLOYEE":
//         return {
//           ...state,
//           employees: [...state.employees, action.payload],
//         };
  
//       case "EDIT_EMPLOYEE":
//         const updatedEmployee = action.payload;
  
//         const updatedEmployees = state.employees.map((employee) => {
//           if (employee.id === updatedEmployee.id) {
//             return updatedEmployee;
//           }
//           return employee;
//         });
  
//         return {
//           ...state,
//           employees: updatedEmployees,
//         };
  
//       case "REMOVE_EMPLOYEE":
//         return {
//           ...state,
//           employees: state.employees.filter(
//             (employee) => employee.id !== action.payload
//           ),
//         };
  
//       default:
//         return state;
//     }
//   };



// The call method returns the object describing operation we want to execute.
// Instead of dispatching action inside a generator function, put returns an object with instructions for our middleware.