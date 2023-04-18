// https://eloquentjavascript.net/05_higher_order.html

// function newFunc(arg1, arg2){
//     var example = arg1;
//     var example2 = arg2;   //console.log(arguments);
//     console.log("Hello, World!",example,example2);
//  } 
 
//  function addNum(component){
//    //nested function
//    function logToConsole(props)  {
//      console.log(props);
//      console.log(component(10,20));
//    }
//    return logToConsole;
  
//  }
  
//  let fun = addNum(newFunc);
//   console.log(fun({"data":"pritam"}));
//  //({"data":"pritam"});
 
 
//  function noisy(f) {
//    return (...args) => {
//      console.log("calling with", args);
//      let result = f(...args);
//      console.log("called with", args, ", returned", result);
//      return result;
//    };
//  }
//  noisy(Math.min)(3, 2, 1);
    
        
//  function repeat(n, action) {
//    for (let i = 0; i < n; i++) {
//      action(i);
//    }
//  }
 
//  repeat(3, console.log);
 
 
//  function unless(test, then) {
//    console.log(test,then)
//    if (!test) then();
//  }
 
//  repeat(3, n => {
//    unless(n % 2 == 1, () => {
//      console.log(n, "is even");
//    });
//  });
    

// function reduce(array, combine, start) {
//     let current = start;
//     for (let element of array) {
//       current = combine(current, element);
//     }
//     return current;
//   }
  
//   console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));



import { React, useState } from 'react';

const Child = (OriginalComponent) => {
 
    // function WithToggle(props) {}
    return (props) => {
        const [count, setCount] = useState(0);

        function decrement() {
            setCount(prev => prev - 1)
        }

        const increment = () =>{
            setCount(prev => prev + 1)
        }

      return <OriginalComponent {...props} decrementCount={decrement} incrementCount={increment} count={count}/>

    };

}

export default Child;