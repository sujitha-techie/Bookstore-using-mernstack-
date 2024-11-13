import { useLoaderData } from 'react-router-dom';
import React from 'react';

function SingleBook() {
  const data = useLoaderData();

  // Use the data in your component logic

  return (
    <div>
      SingleBook {data ? data._id : 'Loading...'}
    </div>
  );
}

export default SingleBook;
