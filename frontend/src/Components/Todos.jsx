const Todos=({todo})=>{
// console.log(props)
const mark=async(completedId)=>{
    await fetch("http://localhost:3000/completed",{
        method:"PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body:JSON.stringify({

            id:completedId

        })
    })
}
    return (
        <>
        {
        todo.map((item)=>{
            return (
                <div key={item._id}>
                <h1>{item.title}</h1>
                <h2>{item.description}</h2>
                <button onClick={()=>mark(item._id)}>Mark as completed</button>
                </div>
            )

        })
    }
    </>
    )
}
export default Todos