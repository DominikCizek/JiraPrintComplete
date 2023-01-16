import React from 'react'

export default function Task(props){
    const taskIsValid = props.task.fields.subtasks.length>0;
    if(taskIsValid){
        return(
            <div className="task">
                <div className="taskHeader">
                    <div className="taskEmoji">
                        <p style={{marginRight : "10px"}}>{props.task.emoji}</p>
                        <h3 style={{fontSize: "24px"}}>{props.task.key}</h3>
                    </div>
                    <div className="subtaskCount">
                        <h3 style={{color: "black", fontSize: "34px", margin: "0px"}}>{props.task.fields.subtasks.length}</h3>
                    </div>
                </div>
                <p className='taskSummary'>
                {props.task.fields.summary}
                </p>
            </div>
        )
    }
    
}