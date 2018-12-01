import React, { Component } from 'react';
import ArticleList from './ArticleList' 
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Список статей</h1>
        <ArticleList />
      </div>
    );
  }
}

export default App;
