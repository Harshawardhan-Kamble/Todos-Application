import { useState } from "react";
const CreateTodo = () => {
  const [title, setTitle] = useState([]);
  const [description, setDescription] = useState([]);
  const submitTodo = async () => {
    try {
      await fetch("http://localhost:3000/todo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body:JSON.stringify({
            title:title,
            description:description
        })
      });
     
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={submitTodo}>Add Todo</button>
    </>
  );
};
export default CreateTodo;
