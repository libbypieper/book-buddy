/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */

import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

function Books() {
  const [books, setBooks] = useState([]);
  const navigate = useNavigate();

  useEffect(()=> {

    async function getAllBooks() {
      try {
        const response = await fetch("https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books");
        const { data }  = await response.json();
        setBooks(data.books);
      } catch (err) {
        console.log(err);
      }
    }
    getAllBooks();
  }, []);  

  if (books.length === 0) {
    return <div>empty</div>;
  }

  return (
    <main>
     {books.map((book) => {
      return <div className="bookCard" key={book.id} onClick={navigate(`/singleBook/${book.id}`)}>name: {book.title}
    </div>;
   })}
  </main>
  );
}


      


export default Books;