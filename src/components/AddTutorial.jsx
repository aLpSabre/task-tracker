import axios from "axios";
import { useEffect, useState } from "react";

const AddTutorial = ({getTutorials}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";
  const handleSubmit = (e) => {
    e.preventDefault();
    addData(title,description);

    setTitle("");
    setDescription("");

  };

  const addData =async (title,description) =>{
  
    try{
      const newTask={title,description};
      const put =await axios.post(url,newTask);
    }catch(error){

    }

    getTutorials();

  }


  return (
    <div className="container text-center mt-4">
      <h1 className="display-6 text-danger">Add Your Task</h1>
      <form onSubmit={handleSubmit} >
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title:
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter your title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
          Description:
          </label>
          <input
            type="text"
            className="form-control"
            id="description"
            placeholder="Enter your Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button className="btn btn-danger mb-4">Submit</button>
      </form>
    </div>
  );
};

export default AddTutorial;
