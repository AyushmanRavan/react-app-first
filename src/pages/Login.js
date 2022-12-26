import React, { useRef,useEffect,useState } from 'react';

function Login(props) {
    const usernameRef = useRef(null)
    const passwordRef = useRef(null);

    // const [username, setUsername] = useState("nome@email.com.br");
    // const [password, setPassword] = useState("QAS");
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
        // Prevent page reload
        event.preventDefault();
      
        const requestBody = {username:usernameRef.current.value,password:passwordRef.current.value}
        console.log("handleSubmit",requestBody)
        setIsSubmitted(true);
    };

    useEffect(() => {
        usernameRef.current.focus();
    }, []);

    // useEffect(() => {
    //     // Side-effect...
    //     return function cleanup() {
    //       // Side-effect cleanup...
    //     };
    // }, dependencies);

    return (
        <div>
            {isSubmitted ? <div>User is successfully logged in</div> : 
                <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                    <input type="text" id="username" placeholder="nome@email.com.br"
                    ref={usernameRef}
                    // onChange={(event) => setUsername(event.target.value)}
                    // value={username}
                />
                <br/>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password"  placeholder="Enter password"
                    ref={passwordRef}
                    // onChange={(event) => setPassword(event.target.value)}
                    // value={password}
                />
                <button>Sign In</button>
                </form>
            }
        </div>
    );
}

export default Login;



// // use of useEffect in react for every rerender 
// useEffect(() => { 
// console.log("I run every time this component re-renders") 
// }); 
// //use of useEffect in react for onMount 
// useEffect(() => { 
// console.log("I Only run once (When the component gets mounted)") 
// }, []); 
// // Condition-based 
// useEffect(() => { 
// console.log("I run every time my condition is changed") 
// }, [condition]); 
// // Condition based with "clean up" 
// useEffect(() => { 
// console.log("I run every time my condition is changed") 
    
// return () => { 
//     console.log("Use this return as a 'clean up tool' (this runs before the actual code)") 
//     } 
// }, [condition]); 