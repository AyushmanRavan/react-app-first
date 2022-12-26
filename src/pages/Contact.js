import React from 'react';
import { Link,useNavigate } from 'react-router-dom';
function Contact(){
  let navigate = useNavigate();
  return (
    <div>
      <p>This is the Contact Page</p>
      <Link to="/">Back to mome</Link> | 
      <button onClick={()=>navigate("/", { state: "From the About Page"})}>Redirect to home</button>
    </div>
  )
}
export default Contact;