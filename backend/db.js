const mongoose = require("mongoose")

mongoose.connect( "mongodb+srv://admin:anirudh4601@cluster0.sgesqtj.mongodb.net/todos")

const todoScheme = mongoose.Schema({
    title:String,
    description:String,
    completed:Boolean
})

const todo = mongoose.model("todos",todoScheme)
module.exports = {
    todo    
}