import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';

function App() {

  //start with GET route, pull data from the server and get it in the console.
  const getGallery = () => {
    console.log('getting gallery')
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response)=>{
      console.log(response.data)
    }).catch((err)=>{
      console.log(err);
    })
  }
  useEffect (()=>{
    getGallery();
  }, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
