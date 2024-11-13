import React from 'react'
import { useState, useEffect } from 'react'
import BookCards from '../Components/BookCards'
function OtherBooks() {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch("https://mern-book-store-ou6z.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
      <BookCards books={books} headLine="Other Books"/>
    </div>
  ) 
}

export default OtherBooks;
