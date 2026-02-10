const express = require("express");
const app = express();
app.use(express.json());

// const notes = [];

// app.post("/notes", (req, res) => {
//   console.log(req.body);
//   notes.push(req.body);

//   res.status(201).json({
//     message: "Note created!"
//   });
// });

// app.get('/notes', (req, res) => {
//   res.status(200).json({
//     message: "Fetched!",
//     notes: notes
//   })
// })

// app.patch('/notes/:index', (req, res) => {
//   const index = req.params.index
//   const description = req.body.description

//   notes[index].description = description

//   res.status(200).json({
//     message: "Updated"
//   })
// })

// app.delete('/notes/:index', (req, res) => {
//   const index = req.params.index;

//   delete notes[index];

//   res.status(200).json({
//     message: "Delete"
//   })
// })

module.exports = app;
