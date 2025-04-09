/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react";
import { useParams } from "react-router";

function singleBook() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(()=> {

    async function getAllBooks() {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const { data }  = await response.json();
        setBook(data.book);
      } catch (err) {
        console.log(err);
      }
    }
    getAllBooks();
  }, []);  

  if (book.length === 0) {
    return <div>empty</div>;
  }

  return (
    <main>
     {book.title}
     {book.id}
     <img src={book.imageURL} />
  </main>
  );
}


      


export default SingleBook;