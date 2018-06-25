//Render a list of booksReducer

import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookList extends Component {

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

function mapStateToProps(state){
  //Whatever is returned from here, will show up as props inside of BookList
  return {
    //Whatever is contained in this object, will be set to equal this.props in the component
    books: state.books
    //This is the connection between redux and our container
  };
}

//Takes a function and a component and creates a container
export default connect(mapStateToProps)(BookList);

//We're taking our React views and our Redux state to generate a useable application

//We want to promote one of these components to what we call a container
