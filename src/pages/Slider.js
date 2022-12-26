import React,{useEffect,useState} from 'react';


const images = [
    "",
    "",
    "",
    "",
    "",
    "",

]



function Slider(props) {
    const [image, setImage] = useState(...images); 
    const [currentImage, setCurrentImage] = useState(0); 

    useEffect(() => { 
        console.log("mounts/updates.")
        return () => {
            console.log("unmounts/updates.")
        }
    },[]); 

    function handleNext(){
        if(currentImage !== image.length-1){
            setCurrentImage((current) => current + 1); 
        }else{
            setCurrentImage(0); 
        }
    }

    function handlePrevious(){
        if(currentImage == 1){
            setCurrentImage(image.length-1);
        }else{
            setCurrentImage((current) => current - 1);
        } 
    }

    function showSpecificImage(index){
        setCurrentImage(index); 
    }

    return (
        <div>
            {/* <button onClick={() => setCount(count + 1)}>You clicked {count} times</button> */}
            <button onClick={handleChange}>You clicked {count} times</button>
        </div>
    );
}

export default Slider;

// useEffect(() => {
        // when Chart mounts, do this
        // when data updates, do this
//     return () => {
            // when data updates, do this
            // before Chart unmounts, do this
//     }
// }, [//Updating])

// const [users, setUsers] = useState([]); 
// useffect(() => { 
//   const getUsers = async () => { 
//     let response = await fetch('/users'); 
//     let data = await response.json(); 
//     setUsers(data); 
//   }; 
//  getUsers(); 
// }, []); 


    // useEffect(() => { 
    //       setCount((count) => count + 1); 
    // }); // render every 1000 milli-seconds if state changes

    // useEffect(() => { 
    //       setCount((count) =>count + 1); 
    // },[]); // Only run the effect on the first render.