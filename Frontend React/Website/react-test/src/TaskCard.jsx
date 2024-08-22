import React, { Component } from 'react'

export default class TaskCard extends Component {
  render() {
    return (
      <>
        <img src={this.props.taskImage} alt="Task Figure" className='w-100'/>
        <h4>{this.props.taskName}</h4>
        <p>{this.props.taskDesc}</p>
        <button type='button' className='btn btn-outline-danger' onClick={()=>{
          this.props.deleteTask(this.props.index)
        }}>Delete</button>
        <button type='button' className='btn btn-outline-warning' onClick={()=>{
          this.props.getTaskData(this.props.index)
        }}>Update</button>
      </>
    )
  }
}
