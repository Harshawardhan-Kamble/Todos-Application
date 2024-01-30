const {createTodo,updateTodo}=require ("./types")
const express=require("express")
const app= express()
app.use(express.json())
app.post("/todos",(req,res)=>{ 
    // Zod validation
    const createPayload=req.body;
    const parsePayload=createTodo.safeParse(createPayload)
    if(!parsePayload.sucess){
        res.status(411).json({msg:"You have entered wrong input"})
        return;
    }
    else{
        // Mongodb
    }


})
app.get("/todo",(req,res)=>{


})
app.put("/completed",(req,res)=>{
     // Zod validation
    const createPayload=req.body;
    const parsePayload=updateTodo.safeParse(createPayload);
    if(!parsePayload.success){
        res.status(411).json({msg:"Something went wrong"})
        return;
    }
    else{
        // Mongodb
        
    }


})
app.listen(3000,()=>{
    console.log("Server Started on host 3000")
})