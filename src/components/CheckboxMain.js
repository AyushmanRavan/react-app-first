import React, { useState } from 'react';
import  Checkbox  from '../components/Checkbox'

const allToppings = [
    { id: 1,name: "Golden Corn", checked: false },
    { id: 2,name: "Paneer", checked: false },
    { id: 3,name: "Tomato", checked: false },
    { id: 4,name: "Mushroom", checked: false },
    { id: 5,name: "Onion", checked: false },
    { id: 6,name: "Black Olives", checked: false },
  ]

function CheckboxMain(props) {
   const [topic,setTopic] = useState(allToppings);
   const [topping,setTopping] = useState(["Paneer","Onion"]);

   const updateCheckStatus = index =>{setTopic(topic.map((data,currentIndex)=>(index === currentIndex) ? {...data,checked:!data.checked} : data))}
   const selectALl=()=>{setTopic(topic.map(data=> ({...data,checked:true})))}
   const unSelectAll=()=>{ setTopic(topic.map(data=>({...data,checked:false}))) }

//    handleChange(event) {
//         var isChecked = event.target.checked;
//         var itemName = event.target.value;
//         this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(itemName, isChecked) }));
//    }

const setCheckboxValueSelected = ()=> {
    let selected = topic;
    topping.forEach((data)=>{
       topic.forEach((tata,index)=> {
           if(tata.name === data){
            selected[index].checked = true;
           }
        });
    })
    setTopic([...selected])
}
 
// setCheckboxValueSelected(event) {
    // this.setState(prevState => ({ checkedItems: prevState.checkedItems.set("Cricket", true) }));
// }
    return (
        <div>
            <p>
                <button onClick={selectALl}>Select All</button>
                <button onClick={unSelectAll}>Un-select All</button>
                <button onClick={setCheckboxValueSelected}>Set Default Value</button>
            </p>
            {topic.map((data,index)=>{
               return  <Checkbox isChecked={data.checked} label={data.name} index={index} checkHandler={()=>updateCheckStatus(index)} key={data.name}/>
            })}
             <p>
              {JSON.stringify(topic, null, 2)}
            </p>
        </div>
    );
}

export default CheckboxMain;