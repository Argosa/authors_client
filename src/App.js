import React from 'react';
import './App.css';
import {Router,Link} from "@reach/router";
import AuthorsList from './components/AuthorsList';
import AuthorForm from './components/AuthorsForm';
import EditAuthor from './components/EditAuthor';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Navbar">Favorite Authors</h1>
      </div>
      <Router>
        <AuthorsList path="/"/>
        <AuthorForm path="/author/add" />
        <EditAuthor path = "/author/:id" />
      </Router>



    </div>
  );
  }

export default App;
