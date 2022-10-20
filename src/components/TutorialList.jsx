import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import axios from "axios";
import EditTutorial from "./EditTutorial";
import { useEffect, useState } from "react";
const TutorialList = ({ tutor, getTutorials }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [id, setId] = useState("");
  const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

  const deleteTask = async (id) => {
    try{
      const del = await axios.delete(`${url}/${id}`);
    }catch(error){

    }

    getTutorials();
  };

  const editTutorial = async ({ id, title, description }, e) => {
    e.preventDefault();
    try {
      const put = await axios.put(`${url}/${id}`, { title, description });
    } catch (error) {
      console.log(error);
    }
    setTitle("");
    setDescription("");
    getTutorials();
  };

  return (
    <div className="container mt-4">
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">Title</th>
            <th scope="col">Description</th>
            <th scope="col" className="text-center">
              Edit
            </th>
          </tr>
        </thead>
        <tbody>
          {tutor?.map((item) => {
            const { id, title, description } = item;
            return (
              <tr key={id}>
                <th>{id}</th>
                <td>{title}</td>
                <td>{description}</td>
                <td className="text-center text-nowrap">
                  <FaEdit
                    size={20}
                    type="button"
                    className="me-2 text-warning"
                    data-bs-toggle="modal"
                    data-bs-target="#edit-modal"
                    onClick={() => {
                      setId(id);
                      setTitle(title);
                      setDescription(description);
                    }}
                  />
                  <AiFillDelete
                    size={22}
                    type="button"
                    className="text-danger "
                    onClick={() => deleteTask(id)}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <EditTutorial
        title={title}
        setTitle={setTitle}
        description={description}
        setDescription={setDescription}
        editTutorial={editTutorial}
        id={id}
      />
    </div>
  );
};

export default TutorialList;
