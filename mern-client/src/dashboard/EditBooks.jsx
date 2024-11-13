import React, { useState } from 'react'
import { Button, Checkbox, Label, TextInput, Select, Textarea } from 'flowbite-react';
import { useLoaderData, useParams } from 'react-router-dom';
function EditBooks() {
  const {id} = useParams()
  const {bookTitle,authorName, imageURL,category, bookDescription, bookPDFURL} = useLoaderData()
  const bookCategories = [
    "Fiction",
    "Non-Fiction",
    "Mystery",
    "Programming",
    "Romance",
    "Sports",
    "Horror",
    "Biography",
    "Autobiography",
    "Travel",
    "Children Book",
    "Business",
    "Fantasy",
    "History",
    "Art and Design",
    "Religion",
    "Science Fiction",
  ]

  const [selectBookCategory, setselectBookCategory] = useState(bookCategories[0]);

  const handleChangeSelectedValue = (event) => {
    //console.log(event.target.value)
    setselectBookCategory(event.target.value);
  }

  const handleUpdate = (event) =>{
    event.preventDefault();
    const form = event.target;

    const bookTitle = form.bookTitle.value;
    const authorName = form.authorName.value;
    const imageURL= form.imageURL.value;
    const category = form.categoryName.value;
    const bookDescription= form.bookDescription.value;
    const bookPDFUrl= form.bookPDFURL.value;
    console.log(bookTitle);
  const updatedbookObj = {
    bookTitle, authorName, imageURL, category, bookDescription,bookPDFUrl
  }
    console.log(bookObj);
  
    //update data to db
    fetch(`https://mern-book-store-ou6z.onrender.com/book/${id}`,{
      method:"PATCH",
      headers:{
        "Content-type":"application/json"
      },
      body: JSON.stringify(updatedbookObj)
    }).then(res => res.json()).then(data =>{
      alert("Book Updated Successfully!")
    })
  }
  return (
    <div className='px-4 my-12'>
      <h2 className='mb-8 text-3xl font-bold'>Update the Book data</h2>
      <form onSubmit={handleUpdate} className="flex lg:w-[880px] flex-col flex-wrap gap-4">
        {/* 1st row */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="bookTitle" value="Book Title" />
            </div>
            <TextInput id="bookTitle" name='bookTitle' type="text" placeholder="Book Name" required 
            defaultValue={bookTitle}/>
          </div>

          {/* Author Name */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="authorName" value="Author Name" />
            </div>
            <TextInput id="authorName" name='authorName' type="text" placeholder="Author Name" required  defaultValue={authorName}/>
          </div>
        </div>


        {/* 2nd row */}
        <div className="flex gap-8">
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Image URL" />
            </div>
            <TextInput id="imageURL" name='imageURL' type="text" placeholder="Book Image URL" required defaultValue={imageURL}/>
          </div>

          {/* Category */}
          <div className='lg:w-1/2'>
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="Book Category" />
            </div>
            <Select id='inputState' name='categoryName' className="w-full rounded" value={selectBookCategory} onChange={handleChangeSelectedValue}>{
              bookCategories.map((option) => <option key={option} value={option} >{option}</option>)
            }
            </Select>
          </div>
        </div>

        {/* Book Description */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookDescription" value="Book Description" />
          </div>
          <Textarea id="bookDescription" placeholder="Write your book description..."
            className='w-full' required rows={6} defaultValue={bookDescription}/>
        </div>
        {/* book pdf link */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="bookPDFURL" value="Book PDF URL" />
          </div>
          <TextInput id="bookPDFURL" name="bookPDFURL" type="text" placeholder="Book PDF URL" required defaultValue={bookPDFURL}/>
        </div>
        <Button type="submit" className='mt-5'>Update Book</Button>
      </form>
    </div>

  )
}

export default EditBooks
