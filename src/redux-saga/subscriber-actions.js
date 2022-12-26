import * as subscriberActionType from './subscriber-action-types';

export function updateSubscriberRequest() {
    return { type: subscriberActionType.UPDATE_SUBSCRIBER_REQUEST };
}

export function updateSubscriberSuccess(updatedData) {
    return { type: subscriberActionType.UPDATE_SUBSCRIBER_SUCCESS, payload: updatedData };
}

export function updateSubscriberError(apiError) {
    return { type: subscriberActionType.UPDATE_SUBSCRIBER_FAILED, payload: apiError };
}


export const createSubscriberRequest = () =>({ type: subscriberActionType.CREATE_SUBSCRIBER_REQUEST })
export const createSubscriberSuccess = (createdData) =>({ type: subscriberActionType.CREATE_SUBSCRIBER_SUCCESS, payload: createdData })
export const createSubscriberError = (apiError) =>({ type: subscriberActionType.CREATE_SUBSCRIBER_FAILED, payload: apiError })

export const getSubscriberRequest = () =>({ type: subscriberActionType.GET_SUBSCRIBER_REQUEST })
export const getSubscriberSuccess = (existingData) =>({ type: subscriberActionType.GET_SUBSCRIBER_SUCCESS, payload: existingData })
export const getSubscriberError = (apiError) =>({ type: subscriberActionType.GET_SUBSCRIBER_FAILED, payload: apiError })

export function getAllSubscriberRequest() {
    return { type: subscriberActionType.GET_ALL_SUBSCRIBER_REQUEST };
}

export function getAllSubscriberSuccess(allData) {
    return { type: subscriberActionType.GET_ALL_SUBSCRIBER_SUCCESS, payload: allData };
}

export function getAllSubscriberError(apiError) {
    return { type: subscriberActionType.GET_ALL_SUBSCRIBER_FAILED, payload: apiError };
}


export const deleteSubscriberRequest = () =>({ type: subscriberActionType.DELETE_SUBSCRIBER_REQUEST })
export const deleteSubscriberSuccess = (existingData) =>({ type: subscriberActionType.DELETE_SUBSCRIBER_SUCCESS, payload: existingData })
export const deleteSubscriberError = (apiError) =>({ type: subscriberActionType.DELETE_SUBSCRIBER_FAILED, payload: apiError })