import { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import EditableCard from "./EditableCard";
import TaskCard from "./TaskCard";

export default class APP extends Component {
  state = {
    tasks: JSON.parse(localStorage.getItem("tasks")) != null ? JSON.parse(localStorage.getItem("tasks")) : [],
    images: ["imgs/image_1.jpg","imgs/image_2.jpg","imgs/image_3.jpg"],
  }

  addTask = ()=>{
    let taskImage = document.querySelector("img"); 
    let taskNameInput = document.querySelector("#taskName"); 
    let taskDescInput = document.querySelector("#taskDesc"); 
    let taskImageSrc = taskImage.src; 
    let taskName = taskNameInput.value; 
    let taskDesc = taskDescInput.value;
    let tasks = this.state.tasks;
    tasks.push(
      {
        taskImage:taskImageSrc,
        taskName:taskName,
        taskDesc:taskDesc,
      }
    )
    this.setState({tasks});
    localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
  }
  
  deleteTask = (index)=>{
    let tasks = this.state.tasks;
    tasks.splice(index,1);
    this.setState({tasks});
    localStorage.setItem("tasks",JSON.stringify(this.state.tasks))
  }

  render(){
    return (
      <div className="container">
        <div className="row my-5 gap-4">
          <EditableCard addTask={this.addTask} images={this.state.images}/>
          {
          this.state.tasks !== null ?
          this.state.tasks.map((task,i)=>{
            return(
              <div className="col-md-3">
                <div className="card d-flex flex-column position-relative" key={i}>
                  <TaskCard taskImage={task.taskImage} taskName={task.taskName} taskDesc={task.taskDesc} deleteTask={this.deleteTask} index={i}/>
                </div>
              </div>
            )
          }) : ""
          }
        </div>
      </div>
    )
  }

}