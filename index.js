const ex = require('express')
const mongoose = require('mongoose');

let app = ex()

mongoose.connect('mongodb://127.0.0.1:27017/noteBook').then(() => {
    console.log("U are Connected With Db");
})

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogPost = new Schema({
  author: ObjectId,
  title: String,
  body: String,
  date: Date,
});

const MyModel = mongoose.model('notes', BlogPost);

let data = new MyModel({
    title: "abcdja",
    body: "ajksdhofqwi",
    date: new Date()
})

data.save();

app.listen(8080)