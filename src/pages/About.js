import React, { useEffect, useState } from 'react';
import api from 'axios'
import './about.css';
// npm i redux react-redux redux-saga react-router redux-form --save

function About(){
  const [posts,setPosts] = useState([])
  const [currentPage , setCurrentPage] = useState(1)
  const [perPageRecord , setPerPageRecord] = useState(20)

  useEffect(()=>{
    api.get("https://jsonplaceholder.typicode.com/posts").then(resp => {
      setPosts(resp.data);
      console.log(resp)
    }).catch(err => { 
        console.log(err)
    })
  },[])

  const totalPages = Math.ceil(posts.length / perPageRecord);
  const pages = [...Array(totalPages + 1).keys()].slice(1)

  const lastPageIndex = currentPage * perPageRecord ;  //4 * 10 =40 
  const firstPageIndex = lastPageIndex - perPageRecord; // 40 - 10 = 30 
  
  const displayRecords = posts.slice(firstPageIndex,lastPageIndex)

  const next = () =>{
    if(currentPage !== totalPages){
       setCurrentPage(currentPage + 1)
    }
  }

  const previous = () =>{
    if(currentPage !== 1){
       setCurrentPage(currentPage - 1)
    }
  }


  return (
    <div>
      {
        displayRecords.map(todo=>{
          return <p key={todo.id}>This is the About {todo.title}</p>
        })
      }
      <span onClick={()=> previous()}>Prev</span>
      <h1>{pages.map(page=>{
        return <span key={page} onClick={()=>setCurrentPage(page)} className={`${currentPage==page ? "active" : ""}`}>{`${totalPages == page ? page : page+'|'}`}</span>
      })}</h1>
      <span onClick={()=> next()}>Next</span>
    </div>
  )
}
export default About;