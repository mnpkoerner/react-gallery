# The Gallery of my Life - The Endless Bummer

## Description
This project was build for a weekend challenge for Prime Digital Academy. It's a full-stack application that emulates some functionality of Facebook and Instagram. It's a gallery of a my life, for this project, I'm taking you to November 2019.

Welcome to the Endless Bummer! It's a strange thing to say, but let me elaborate. Starting in 2017, I began working as the tour manager for a slam poet, Neil Hilborn. Since then, we've been aroud the world spreading messages of hope and positivity. We recognize that, sometimes, everything seems impossible, the whole world is caving in, and that feeling seems to last forever: the endless bummer. But, there's often nothing to be done to will that feeling out of existence. Still, it's important to recognize that the feeling doesn't control you.

Journaling and photography have helped me ignore those crushing feelings. They force me into a practice of seeking out beautiful things every day. So, this project is in effort to welcome you into that process. Find something beautiful and photograph it, and make some notes about your day. Take inventory of your surroundings and try to find something extraordinary in an ordinary world.

The starting point of this project contains photographs from my time on tour with Neil as well as excerpts from the notes I take about my day as we drove coast to coast on tour in November 2019.

## Screenshots
![Project screenshot](/bummer.png)

### Prerequisistes
* ReactJS
* Node
* Express
* PG
* PostgreSQL/mySQL
* nodemon

## Installation
1. Open the directory your IDE
    * 'npm install'
    * 'npm install pg'
2. Insert placeholder SQL data
    * Open postico
    * create new database named 'react_gallery'
    * copy, paste, and execute code from database.sql file
3. Open two terminal windows
    * in one: 'npm run client'
    * in two: 'npm run server'
    * NOTE: if you done' have nodemon, you'll need a third window to run 'npm install nodemon --global'
4. Install Sweetalert
    * (if you don't currently have it) 'npm install sweetalert --save'
    * (otherwise) 'npm install sweetalert'

## Built With
* ReactJS
* SweetAlert

## Usage

When you click on an image, you're able to flip the card and see what's written underneath. Use the form in the header to submit your own images and stories. A note, that this current build of the project requires the images be stored locally. Place your images in the public images folder. When you type your url into that field to put your image on the page, the path will just be 'images/YOUR_FILE_NAME.jpg'

If you add something you don't want, you can click the black x on the corner of the card. SweetAlery will ask you to confirm your choice. If you click the confirm button, you're data will be removed from your database. If you click outside the window, you'll keep the card.

So tell a beautiful story, the story of your life!

## Acknowledgement
Big thanks to the folks from [React](https://reactjs.org/) and [SweetAlert](https://sweetalert.js.org/) for building great tools! Huge thanks to everyone at [Prime Digital Academy](primeacademy.io), especially Dane Smith, for challenging me how to build something like this and for teaching me the tools to do it! Without the help of [Justin Applegren](http://github.com/jappelgren/), [Josh Vedane](https://github.com/Joshua-Vedane), and [Napoleon Stanley](https://github.com/napoleonstanley316), I'd still be stuck at square one on this project.

Love and Respect to [Neil Hilborn](https://buttonpoetry.com/neilhilborn/), without him none of this would have happened. The Endless Bummer never ends.

## Support

Reach out with any questions!
