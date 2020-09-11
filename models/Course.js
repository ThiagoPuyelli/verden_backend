const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Section = require("./Section");

const courseSchema = new Schema({
    name: {type: String, required: true},
    image: String,
    sections: {type: [Section]},
    category: {type: String, required: true},
    difficulty: {type: String, required: true},
    rating: {type: Number, default: 0, min: 0, max: 10},
    description: {type: String, required: true},
    hours: {type: Number, required: true},
    alumnsID: {type: [String]},
    instructorID: {type: String, required: true}
})

module.exports = moongose.model("Course", courseSchema);