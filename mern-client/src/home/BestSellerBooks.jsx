import React, { useState,useEffect } from 'react'
import BookCards from '../Components/BookCards'

function BestSellerBooks() {
    const [books,setBooks] = useState([])
    useEffect(()=>{
        fetch("https://mern-book-store-ou6z.onrender.com/all-books").then(res=>res.json()).then(data=>setBooks(data.slice(0,8)))
    },[])
  return (
    <div>
      <BookCards books={books} headLine="Best Seller Books"/>
    </div>
  )
}

export default BestSellerBooks
