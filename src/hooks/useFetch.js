import React,{useState,useEffect} from 'react';
import axios from "axios";

function useFetch(url) {

    let [responseData, setResponseData] = useState({
        apiData:[],
        isLoading:false,
        apiError: null
    });


    useEffect(()=>{

        const fetchData = async () => {
            setResponseData({...responseData, isLoading:true })
            axios({
                "method": "GET",
                "url": url,
                "headers": {
                  "content-type": "application/octet-stream",
                }, "params": {
                  "language_code": "en"
                }
              })
              .then((response) => {
                setResponseData(response.data)
                setResponseData({...responseData, isLoading:false ,apiData:response.data })
              })
              .catch((error) => {
                setResponseData({...responseData, isLoading:false, apiError:error })
              })
        }

        fetchData();
      
    },[url])

    return { isLoading, apiData, apiError } = responseData;
}

export default useFetch;