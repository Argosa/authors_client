import React from 'react';
import './App.css';
import {Router} from "@reach/router";
import AuthorsList from './components/AuthorsList';
import AuthorForm from './components/AuthorsForm';
import EditAuthor from './components/EditAuthor';
import AuthorView from './components/AuthorView';

function App() {
  return (
    <div className="App">
      <div>
        <h1 className="Navbar">Favorite Authors</h1>
      </div>
      <Router>
        <AuthorsList path="/"/>
        <AuthorForm path="/author/add" />
        <EditAuthor path = "/authors/edit/:id" />
        <AuthorView path = "/authors/view/:id" />
      </Router>
    </div>
  );
  }

export default App;
