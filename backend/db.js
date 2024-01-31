const mongoose=require("mongoose")
const DB_URL=process.env.DB_URL;
mongoose.connect(DB_URL);

const Todo = mongoose.model('Todo', { title: String,
    description:String,
    completed:Boolean });

module.exports={
    Todo
}
