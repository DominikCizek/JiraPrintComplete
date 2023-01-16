import React from 'react';

export default function Subtask(props){
return(
    <div className="subtask">
            <div className="taskHeader">
                <div className="taskEmoji">
                    {props.subtask.emoji}
                    <h3>{props.subtask.key}</h3>
                </div>
            </div>
            <div className="taskSummary">
                <h3 style={{margin: "0px", fontSize: "38px"}}>{props.subtask.fields.summary}</h3>
            </div>
    </div>
)
}