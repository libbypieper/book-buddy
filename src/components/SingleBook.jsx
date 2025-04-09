/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */

import { useEffect, useState } from "react";
import { useParams } from "react-router";

function SingleBook() {
  const [book, setBook] = useState({});
  const { id } = useParams();

  useEffect(()=> {

    async function fetchBookById() {
      try {
        const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`);
        const { data } = await response.json();
        setBook(data.book);
      } catch (err) {
        console.error(err);
      }
    }
    fetchBookById();
  }, [id]);

  if (!book.id) {
    return <div>Loading book details...</div>;
  }

  return (
    <main>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      {book.imageURL && <img src={book.imageURL} alt={book.title} style={{ width: "200px" }} />}
    </main>
  );
}


      


export default SingleBook;