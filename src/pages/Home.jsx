import AddTutorial from "../components/AddTutorial";
import TutorialList from "../components/TutorialList";
import axios from "axios";
import { useState,useEffect } from "react";

const Home = () => {

const [tutorials, setTutorials] = useState([]);
const url = "https://tutorials-api-cw.herokuapp.com/api/tutorials";

const getTutorials =async () =>{
  try{
    const {data} = await axios(url);
    setTutorials(data);
    console.log(data)
  }
  catch(error){
    console.log(error)
  }

};
useEffect(() => {
  getTutorials(); 

  return () => {

  }
}, [])


 


  return (
    <>
      <AddTutorial getTutorials={getTutorials} />
      <TutorialList  tutor={tutorials} getTutorials={getTutorials} />
    </>
  );
};

export default Home;
