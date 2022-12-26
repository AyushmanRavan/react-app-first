import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import * as subscriberAction from '../redux-saga/subscriber-actions';

function Account(props) {

  const dispatch = useDispatch()
    const {loading, data,error} = useSelector(state => state.subscriber)
  // const data = useSelector(state => state.subscriber.data)
  // const loading = useSelector(state => state.subscriber.loading)
  // const error = useSelector(state => state.subscriber.error)


    useEffect(() => {
        dispatch(subscriberAction.getAllSubscriberRequest());
    }, [dispatch]) 

    return (
        <>
          {
            data.length > 0 && data.map(todo => (
              <p key={todo.id}>This is the About {todo.title}</p>
            ))
          }
          { data.length === 0 ? <p>No users</p> : null }
          { data.length === 0 && loading === true ? <p>Loading...</p> : null }
          { error === 0 && !loading === true ? <p>{error.message}</p> : null }
        </>

    );
}

export default Account;