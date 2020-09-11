const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Part = require("./Part");

const sectionSchema = new Schema({
    name: {type: String, required: true},
    position: {type: String, required: true},
    parts: {type: [Part]},
    courseID: {type: String, required: true}
});

module.exports = mongoose.model("Section", sectionSchema);