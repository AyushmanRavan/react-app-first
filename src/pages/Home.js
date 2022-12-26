import React from 'react';

function Home({login}){

  return (
    <div>
      <p>This is the Home Page</p>
      <button onClick={login}>Login</button>
    </div>
  )
}
export default Home;