const {createTodo,updateTodo}=require ("./types")
const express=require("express")
const app= express()
app.use(express.json())
// body title description
app.post("/todos",(req,res)=>{ 
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload)
    if(!parsePayload.sucess){
        res.status(411).json({msg:"You have entered wrong input"})
        return;
    }
    else{
        
    }


})
app.get("/todo",(req,res)=>{


})
app.put("/completed",(req,res)=>{
    const createPayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({msg:"Something went wrong"})
        return;
    }


})
app.listen(3000,()=>{
    console.log("Server Started on host 3000")
})