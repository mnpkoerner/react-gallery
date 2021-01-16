const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
//new PUT route for stretch mode, goes to the database and increments the value
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id
    const queryText = `
        UPDATE "cards"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
        `;
    pool.query(queryText, [id]).then((response)=>{
        console.log(response);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500)
    })
    // const galleryId = req.params.id;
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    // res.sendStatus(200);
}); // END PUT Route

// GET Route
//new GET route for stretch mode, goes to data stored in DB instead of on server
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "cards" ORDER BY "id"`
    pool.query(queryText).then((response)=>{
        console.log(response);
        res.send(response.rows);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
    // res.send(galleryItems);
}); // END GET Route

//this is the POST route to add a new card to the gallery!
router.post('/', (req, res)=>{
    const newData = [req.body.path, req.body.description];
    const queryText = `
        INSERT INTO "cards" ("path", "description")
        VALUES ($1, $2);
    `;
    pool.query(queryText, newData).then((response)=>{
        console.log(response);
        res.sendStatus(200);
    }).catch((error)=>{
        console.log(error);
        res.sendStatus(500);
    })
})

module.exports = router;
