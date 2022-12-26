// import logo from './logo.svg';
import { Provider } from 'react-redux'  
import  { useState } from 'react';
import './App.css';
// import CheckboxMain from './components/CheckboxMain';
import { BrowserRouter, NavLink, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import States from './pages/States'
import StatesPass from './pages/StatesPass'
import Error from './pages/Error'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Account from './pages/Account'
import Login from './pages/Login'
import Slider from './pages/Slider'
// import FileExplorer from './components/FileExplorer';
// import CountryStateAndCity from './components/CountryStateAndCity'
// import Recursion from './components/Recursion'

import configureStore from './configureStore';
const store = configureStore();

const Comments = [
  {
    title: 'Item 1',
    children: [
      {
        title: 'Item 1.1',
        children: [
          {
            title: 'Item 1.1.1',
            children: [{
              title: 'ayushman',
            }
            ]
          },
          {
            title: 'Item 1.1.2',
          }
        ]
      },
      {
        title: 'Item 1.2',
      },
    ],
  },
  {
    title: 'Item 2',
    children: [
      {
        title: 'Item 2.1',
      }
    ]
  }

]

let Files = {
  type: "folder",
  name: "parent",
  data: [
    {
      type: "folder",
      name: "root",
      data: [
        {
          type: "folder",
          name: "src",
          data: [
            {
              type: "file",
              name: "index.js"
            }
          ]
        },
        {
          type: "folder",
          name: "public",
          data: [
            {
              type: "file",
              name: "index.ts"
            }
          ]
        },
        {
          type: "file",
          name: "index.html"
        },
        {
          type: "folder",
          name: "data",
          data: [
            {
              type: "folder",
              name: "images",
              data: [
                {
                  type: "file",
                  name: "image.png"
                },
                {
                  type: "file",
                  name: "image2.webp"
                }
              ]
            },
            {
              type: "file",
              name: "logo.svg"
            }
          ]
        },
        {
          type: "file",
          name: "style.css"
        }
      ]
    }
  ]
}

function App() {
  let [loggedIn,setLoggedIn] = useState(null);
 
  function handleLogin(){
    setLoggedIn(true);
  }

  function handleLogout(){
    setLoggedIn(false);
  }

  return (
    <div className="App">
      {/* <CountryStateAndCity/> */}
      {/* <Recursion items={Comments}/> */}
      {/* <FileExplorer files={Files}/> */}
      {/* { <CheckboxMain/> } */}

      <Provider store={store}>
          <BrowserRouter>
            <header>
              <h1>Hello World</h1>
            </header>
            <nav>
              <NavLink to="">Home</NavLink> | 
              <NavLink to="about">Pegination</NavLink> | 
              <NavLink to="contact">Contact</NavLink> |
              <NavLink to="dummy">Dummy</NavLink> |
              <NavLink to="state">State</NavLink> |
              <NavLink to="profile:userId">Profile</NavLink> |
              <NavLink to="state-pass">State-Pass</NavLink> |
              <NavLink to="dashboard">Dashboard</NavLink> |
              <NavLink to="login">Login</NavLink> |
              <NavLink to="timer">Slider</NavLink> |
            </nav>

            <Routes>
              {/* <Route path="/" element={<Home login={handleLogin}/>} /> */}
              <Route path="/" element={ loggedIn ? <Navigate to="/dashboard"/> : <Home login={handleLogin} />} />
              <Route path="dashboard" element={ loggedIn ? <Dashboard logout={handleLogout}/> :  <Navigate to="/" state="From Dashboard" />} >
                <Route path="account" element={<Account/>}/>
                <Route path="settings" element={<p>This is the nested Settings route</p>}/>
              </Route>
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
              <Route path="timer" element={<Slider/>} /> 
              <Route path="contact" element={<Contact/>} />
              <Route path="state" element={<States/>} /> 
              <Route path="profile">
                <Route path=":userId" element={<Profile/>}/>
              </Route>
              <Route path="state-pass" element={<StatesPass/>} />
              <Route path="dummy" element={<Navigate to={"/state-pass"} state={"from main root"}/>} />
              <Route path="*" element={<Error/>} />
            </Routes>
        </BrowserRouter>
    </Provider>

    </div>
  );
}

export default App;
