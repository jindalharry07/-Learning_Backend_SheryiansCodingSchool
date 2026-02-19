const musicModel = require("../models/music.model");
const { uploadFile } = require("../services/storage.service");
const albumModel = require("../models/album.model");
const jwt = require("jsonwebtoken");

async function createMusic(req, res) {
  // const token = req.cookies.token;

  // if (!token) {
  //   return res.status(401).json({
  //     message: "Unauthorized Token",
  //   });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   if (decoded.role !== "artist") {
  //     return res.status(403).json({
  //       message: "You are not allowed!",
  //     });
  //   }
  //   // console.log(decoded.id)
  //   // console.log(decoded.role)

  const { title } = req.body;
  const file = req.file;

  const result = await uploadFile(file.buffer.toString("base64"));

  const music = await musicModel.create({
    uri: result.url,
    title,
    artist: req.user.id,
  });

  res.status(201).json({
    message: "Music Created!",
    music: {
      id: music._id,
      uri: music.uri,
      title: music.title,
      artist: music.artist,
    },
  });
  // } catch (err) {
  //   console.log("ERROR:", err);
  //   return res.status(401).json({
  //     message: "Unauthorized to upload!",
  //   });
  // }
}

async function createAlbum(req, res) {
  // const token = req.cookies.token;

  // if (!token) {
  //   return res.status(401).json({
  //     message: "Token not valid!",
  //   });
  // }

  // try {
  //   const decoded = jwt.verify(token, process.env.JWT_SECRET);

  //   if (decoded.role !== "artist") {
  //     return res.status(403).json({
  //       message: "You are not allowed!",
  //     });
  //   }

  const { title, musics } = req.body;

  const album = await albumModel.create({
    title,
    artist: req.user.id,
    musics: musics,
  });

  res.status(202).json({
    message: "Album Created!",
    album: {
      id: album._id,
      title: album.title,
      artist: album.artist,
      musics: album.musics,
    },
  });
  // } catch (err) {
  //   console.log(err);
  //   return res.status(401).json({
  //     message: "Unauthorized to Created Album",
  //   });
  // }
}

module.exports = { createMusic, createAlbum };
