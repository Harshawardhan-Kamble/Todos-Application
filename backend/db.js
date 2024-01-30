const mongoose=require("mongoose")
mongoose.connect('mongodb+srv://k_harsh08:9HsqoPdVd4WI63Fc@cluster0.cyiljaj.mongodb.net/todos');

const Todo = mongoose.model('Todo', { title: String,
    description:String,
    completed:Boolean });

module.exports={
    Todo
}
