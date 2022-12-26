import React,{useEffect,useState} from 'react';
import PropTypes from 'prop-types';

CountryStateAndCity.propTypes = {
    
};

function CountryStateAndCity(props) {
    const [country, setCountry] = useState([]);
    const [countryId, setCountryId] = useState("");
    const [state, setState] = useState([]);
    const [stateId, setStateId] = useState("");
    const [city, setCity] = useState([]);
    const [cityId, setCityId] = useState("");

    useEffect(()=>{
        const getCountry = async () => {
            setCountry(["AAAA","BBBB"])
        }
        getCountry();
    },[])

    const changeCountry = (evnt) =>{
          setCountryId(evnt.target.value);
          setState([]);
          setCity([]);
    }

    useEffect(()=>{
        const getState = async () => {
            if(countryId === "AAAA"){
                setState(["CCCC","DDDD"])
            }
            if (countryId === "BBBB") {
                setState(["EEEE","FFFF"])
            }
        }
        getState();
    },[countryId])

    const changeState = (evnt) =>{
        setStateId(evnt.target.value);
          setCity([]);
    }

    useEffect(()=>{
        const getCity = async () => {
            if(stateId === "CCCC"){
                setCity(["GGGG","HHHH"])
            }
            if (stateId === "DDDD") {
                setCity(["IIII","IIII"])
            }
            if(stateId === "EEEE"){
                setCity(["JJJJ","JJJJ"])
            }
            if(stateId === "FFFF"){
                setCity(["KKKK","LLLL"])
            }
        }
        getCity();
    },[stateId])


    const changeCity = (evnt) =>{
        setCityId(evnt.target.value);
    }

    return (
        <>
        <div>
            <label for="pet-country">Choose a Country:</label>
            <select name="country" id="pet-country" onChange={(evnt)=>changeCountry(evnt)}>
                <option value="">--Please choose Country--</option>
                {
                    country.map((item,index)=>{
                      return ( <option value={item} key={index}>{item}</option> );
                    })
                }
            </select>
        </div>
         <div>
         <label for="pet-state">Choose a State:</label>
         <select name="state" id="pet-state" onChange={(evnt)=>changeState(evnt)}>
             <option value="">--Please choose State--</option>
             {
                 state.map((item,index)=>{
                   return  <option value={item} key={index}>{item}</option>
                 })
             }
         </select>
     </div>
     <div>
         <label for="pet-city">Choose a City:</label>
         <select name="city" id="pet-city" onChange={(evnt)=>changeCity(evnt)}>
             <option value="">--Please choose City--</option>
             {
                 city.map((item,index)=>{
                   return  <option value={item} key={index}>{item}</option>
                 })
             }
         </select>
     </div>
     </>
    );
}

export default CountryStateAndCity;