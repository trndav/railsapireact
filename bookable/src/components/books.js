// rfce
import React from 'react'

function Books(props) {
  return (
    <div>books bookable\src\components\books.js
        <h3>This books are from API</h3>
        {props.books.map((book) => {
            return (
                <div key={book.id}>
                    <h2>{book.title}</h2>
                    <p>{book.body}</p>
                </div>
            );
        })}
    </div>
  );
}
export default Books