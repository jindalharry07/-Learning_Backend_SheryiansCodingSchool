// const express = require("express");
// const app = express();
// app.use(express.json());

// const noteModel = require("./models/notes.model");

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

// app.post("/notes", async (req, res) => {
//   const data = req.body;
//   await noteModel.create({
//     title: data.title,
//     description: data.description,
//   });

//   res.status(201).json({
//     message: "Note Created!",
//   });
// });

// app.get("/notes", async (req, res) => {
//   const notes = await noteModel.find();

//   res.status(200).json({
//     message: "Notes fetched",
//     notes: notes,
//   });
// });

// app.delete("/notes/:id", async (req, res) => {
//   const id = req.params.id;

//   await noteModel.findOneAndDelete({
//     _id: id,
//   });

//   res.status(200).json({
//     message: "Note Deleted!",
//   });
// });

// app.patch("/notes/:id", async (req, res) => {
//   const id = req.params.id;
//   const description = req.body.description;

//   await noteModel.findOneAndUpdate({ _id: id }, { description: description });

//   res.status(200).json({
//     message: "Note Updated!"
//   })
// });

// module.exports = app;

const express = require("express");
const multer = require("multer");
const uploadFile = require("./services/storage.service");
const postModel = require("./models/post.model")

const app = express();
app.use(express.json());

const upload = multer({ storage: multer.memoryStorage() });

app.post("/create-post", upload.single("image"), async (req, res) => {
  // console.log(req.body);
  // console.log(req.file);

  const result = await uploadFile(req.file.buffer);
  console.log(result);

  const post = await postModel.create({
    image: result.url,
    caption: req.body.caption
  })

  return res.status(201).json({
    message: "POST CREATED!",
    post
  })
});

module.exports = app;
