import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './components/Card';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function App() {
  let [moviesData,setMoviesData] = useState([]);

  let getMovies = async function () {
    let {data} = await axios.get("https://api.themoviedb.org/3/trending/all/day?api_key=d573091d322cd7c9ffc56a9c542c5aad");
    let {results} = data;
    setMoviesData(results);
  }
  
  useEffect(()=>{
    getMovies();
  },[])
  
  return (
    <div className="container">
      <div className="row my-5 g-4">
        {
          moviesData.map((movie,index)=>
            <Card movie={movie} key={index}/>
          )
        }
      </div>
    </div>
  )
}






























































// import { Component } from "react";
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import EditableCard from "./EditableCard";
// import TaskCard from "./TaskCard";

// export default class APP extends Component {
//   state = {
//     tasks: JSON.parse(localStorage.getItem("tasks")) != null ? JSON.parse(localStorage.getItem("tasks")) : [],
//     images: ["imgs/image_1.jpg","imgs/image_2.jpg","imgs/image_3.jpg"],
//     actionBtn:" ",
//   }

//   addTask = ()=>{
//     let taskImage = document.querySelector("img"); 
//     let taskNameInput = document.querySelector("#taskName"); 
//     let taskDescInput = document.querySelector("#taskDesc"); 
//     let taskImageSrc = taskImage.src; 
//     let taskName = taskNameInput.value; 
//     let taskDesc = taskDescInput.value;
//     let tasks = this.state.tasks;
//     tasks.push(
//       {
//         taskImage:taskImageSrc,
//         taskName:taskName,
//         taskDesc:taskDesc,
//       }
//     )
//     this.setState({tasks});
//     localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
//   }
  
//   deleteTask = (index)=>{
//     let tasks = this.state.tasks;
//     tasks.splice(index,1);
//     this.setState({tasks});
//     localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
//   }

//   getTaskData = (index)=>{
//     let actionBtn= document.querySelector(".actionBtn");
//     actionBtn.innerHTML = "Update Task";
//     actionBtn.classList.replace("btn-outline-success","btn-outline-warning");
//     let tasks = this.state.tasks;
//     let taskImage = document.querySelector("img"); 
//     let taskNameInput = document.querySelector("#taskName"); 
//     let taskDescInput = document.querySelector("#taskDesc"); 
//     taskImage.src = tasks[index].taskImage;
//     taskNameInput.value = tasks[index].taskName;
//     taskDescInput.value = tasks[index].taskDesc;
//   }

//   updateTask = (index)=>{
//     let taskImage = document.querySelector("img"); 
//     let taskNameInput = document.querySelector("#taskName"); 
//     let taskDescInput = document.querySelector("#taskDesc"); 
//     let taskImageSrc = taskImage.src; 
//     let taskName = taskNameInput.value; 
//     let taskDesc = taskDescInput.value;
//     let tasks = this.state.tasks;
//     tasks.splice(index,1,{
//         taskImage:taskImageSrc,
//         taskName:taskName,
//         taskDesc:taskDesc,
//     });
//     this.setState({tasks});
//     localStorage.setItem("tasks",JSON.stringify(this.state.tasks));
//     taskImage.src = "imgs/image_1.jpg";
//     taskNameInput.value = "";
//     taskDescInput.value = "";
//     let actionBtn= document.querySelector(".actionBtn");
//     actionBtn.innerHTML = "Add Task";
//     actionBtn.classList.replace("btn-outline-warning","btn-outline-success");
//   }

//   componentDidMount(){
//     let actionBtn = this.state.actionBtn;
//     actionBtn = document.querySelector(".actionBtn");
//     this.setState({actionBtn});
//   }



//   render(){
//     return (
//       <div className="container">
//         <div className="row my-5 g-4">
//           <EditableCard addTask={this.addTask} images={this.state.images} updateTask={this.updateTask} actionBtn={this.state.actionBtn}/>
//           {
//           this.state.tasks !== null ?
//           this.state.tasks.map((task,i)=>{
//             return(
//               <div className="col-md-3">
//                 <div className="card d-flex flex-column position-relative" key={i}>
//                   <TaskCard taskImage={task.taskImage} taskName={task.taskName} taskDesc={task.taskDesc} deleteTask={this.deleteTask} getTaskData={this.getTaskData} actionBtn={document.querySelector(".actionBtn")} index={i}/>
//                 </div>
//               </div>
//             )
//           }) : ""
//           }
//         </div>
//       </div>
//     )
//   }

// }