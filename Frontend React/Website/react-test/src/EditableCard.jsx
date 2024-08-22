import React, { Component } from 'react'

export default class EditableCard extends Component {
    state = {
        images: this.props.images,
        currentIndex: 0,
    }
    getNextImage = ()=>{
        let currentIndex = this.state.currentIndex;
        if (currentIndex < this.state.images.length - 1) {
            currentIndex++;
        }
        else{
            currentIndex = 0;
        }
        this.setState({currentIndex});
    }
    
    getPrevImage = ()=>{
        let currentIndex = this.state.currentIndex;
        if (currentIndex > 0) {
            currentIndex--;
        }
        else{
            currentIndex = this.state.images.length - 1;
        }
        this.setState({currentIndex});
    }
    render() {
        return (
            <div className="col-md-3">
                <div className="card d-flex flex-column position-relative">
                    <img src={this.props.images[this.state.currentIndex]} alt="Task Figure" className='w-100' />
                    <label htmlFor="taskName me-1">Task Name </label>
                    <input type="text" id='taskName' className="form-control" required/>
                    <label htmlFor="taskDesc me-1">Task Description </label>
                    <input type="text" id='taskDesc' className="form-control" required/>
                    <div className="icons position-absolute d-flex justify-content-between top-25 w-100">
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{
                            this.getPrevImage();
                        }}>
                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"></circle>
                            <path d="M22 16L15 23L22 30M15 23H31" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                        <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={()=>{
                            this.getNextImage();
                        }}>
                            <circle cx="23" cy="23" r="23" fill="#F5F5F5"></circle>
                            <path d="M14.5 23H31M31 23L24 16M31 23L24 30" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                        </svg>
                    </div>
                    <button type='submit' className="btn btn-outline-success" onClick={()=>{
                        this.props.addTask()
                        }
                    }>Add Task</button>
                </div>
            </div>
        )
    }
}
