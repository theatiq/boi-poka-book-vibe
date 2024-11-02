import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredList } from "../../utility/utilityDb";

const BookDetail = () => {
  // const params = useParams()
  const { bookId } = useParams();
  const id = parseInt(bookId);
  const data = useLoaderData();
  console.log(data);

  const book = data.find((book) => book.bookId === id);
  const { bookId: currentBookId, image } = book;
  const handleMarkAsRead = (id) => {
    addToStoredList(id)
  };

  return (
    <div className="my-4 border rounded-lg">
      <h1>Book Details {bookId}</h1>
      <img className="w-36" src={image} alt="" />
      <br />
      <button onClick={()=>handleMarkAsRead(bookId)} className="btn btn-outline m-4 btn-accent">Mark as Read</button>
      <button className="btn btn-accent">Add to Wishlist</button>
    </div>
  );
};

export default BookDetail;
