import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import GalleryList from '../GalleryList/GalleryList.jsx'
import GalleryForm from '../GalleryForm/GalleryForm.jsx'

function App() {
  //I'm going to use some state (eventually)
  //making variable to hold the contents of the database

  const [gallery, setGallery] = useState([])

  //I'm setting up my post route, and I need a few more pieces of state to work with
  //I need two: one for the new path, and one for the new description
  //I'll pass these in as props to my GalleryForm component along with the POST, and I'll use them
  //in my post route to send new data to the database. First, I'll set my new
  //pieces of state and then write my post route
  const [newPath, setNewPath] = useState('');
  const [newDescription, setNewDescription] = useState('')

  const sendNewCard = () => {
    const newCard = {
      path: newPath,
      description: newDescription
    }
    axios({
      method: 'POST',
      url: '/gallery',
      data: newCard
    }).then((response)=> {
      console.log(response);
      getGallery();
    }).catch((error)=>{
      console.log(error);
      alert('error sending new data!')
    })
  }

  //start with GET route, pull data from the server and get it in the console.
  //I'm storing the data I get from the server in the gallery variable
  //with setGallery. This way, every time I make this HTTP request, I'll
  //change the value of gallery to reflect the correct state
  const getGallery = () => {
    console.log('getting gallery')
    axios({
      method: 'GET',
      url: '/gallery'
    }).then((response) => {
      setGallery(response.data);
      console.log('gallery value', gallery)
    }).catch((err) => {
      alert('error getting')
      console.log(err);
    })
  }
  //my put route will live on my App.jsx, then I'll pass it
  //in as props down to GalleryItem
  const addLike = (imageId) => {
    const id = imageId;
    axios({
      method: 'PUT',
      url: `/gallery/like/${id}`,
      data: 'data'
    }).then((response) => {
      console.log(response)
      getGallery();
    }).catch((err) => {
      console.log(err);
      alert('error liking')
    })
  }


  //with useEffect, on page load, call getGallery
  //to pull up all the data from the server
  //eventually, we'll rewrite the route to get data
  //from the database
  useEffect(() => {
    getGallery();
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-container">
          <h1 className="App-title">The Endless Bummer</h1>
          <p>Hello and welcome to the Endless Bummer. In the fall of 2019, I was
            the tour manager for Neil Hilborn's Endless Bummer Tour. I say fall
            but it's really been since we embarked on this strange journey together
            in 2017. These are a collection of my thoughts and feelings from November
            2019. But the Endless Bummer is everywhere and all the time and we need to
            make the best of it, so add something to the story, and find something beautiful
            in an unexpected place.
          </p>
        </div>
        <div className="form-container">
          <GalleryForm
            sendNewCard={sendNewCard}
            newPath={newPath}
            newDescription={newDescription}
            setNewPath={setNewPath}
            setNewDescription={setNewDescription}
          />
        </div>
      </header>
      <GalleryList
        gallery={gallery}
        addLike={addLike}
      />
    </div>
  );
}

export default App;
