import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'

function App() {
  //I'm going to use some state (eventually)
  //making variable to hold the contents of the database

  const [gallery, setGallery] = useState([])

  //start with GET route, pull data from the server and get it in the console.
  //I'm storing the data I get from the server in the gallery variable
  //with setGallery. This way, every time I make this HTTP request, I'll
  //change the value of gallery to reflect the correct state
  const getGallery = () => {
    console.log('getting gallery')
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response)=>{
      console.log(response.data)
      setGallery(response.data);
      console.log('gallery value', gallery)
    }).catch((err)=>{
      console.log(err);
    })
  }
  //with useEffect, on page load, call getGallery
  //to pull up all the data from the server
  //eventually, we'll rewrite the route to get data
  //from the database
  useEffect (()=>{
    getGallery();
  }, [])
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <GalleryList
          gallery={gallery}
        />
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
