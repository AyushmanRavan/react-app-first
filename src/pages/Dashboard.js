import React from 'react';
import { Outlet, Link } from 'react-router-dom';


function Dashboard({logout}) {
    return (
        <div>
            <p>Welcome User</p>
            <Link to="settings">Settings</Link> |
            <Link to="account">Account</Link>
            <Outlet/>
            <button onClick={logout}>Logout</button>
        </div>
    );
}

export default Dashboard;


// The <Outlet> element is used as a placeholder. In this case an <Outlet>enables the Users component to render its child routes. 
// Thus the<Outlet> element will render either a <Settings> or <Account> element depending on the current location.



// forwardRef
// Ref forwarding is a cool technique for automatically passing a ref through a component to one of its children. 
// It gives the child component a reference to a DOM element created by its parent component. 
// \This then allows the child to read and modify that element anywhere it is being used.