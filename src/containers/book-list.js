//Render a list of booksReducer

import React, { Component } from 'react';

export default class BookList extends Component {

  renderList() {
    // The helper function will map over an array of books

    // For each book in the array, we create an li that contains the book's title
    return this.props.books.map((book) => {
      return (
        // Since it's a list, we need a key. Unique value for the key will be the title
        <li key={book.title} className="list-group-item">{book.title}</li>
      )
    });
  }

  render() {
    return (
      //Creates a ul, then calls a helper function called this.renderList()
      <ul className="list-group col-sm-4">
        { this.renderList() }
      </ul>
    )
  }
}

//We're taking our React views and our Redux state to generate a useable application

//We want to promote one of these components to what we call a container
