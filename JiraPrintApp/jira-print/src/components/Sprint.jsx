import React, {useState} from "react";
import TasksList from "./TasksList";
import SubtasksList from "./SubtasksList";
import { formatDate } from "../utilities/formatDate";
import endFlag from '../assets/endFlag.svg';
import startFlag from '../assets/startFlag.svg';
import SprintControls from "./SprintControls";
import { getEmoji } from "../utilities/getEmoji";
import useJiraFetch from "../hooks/useJiraFetch";

export default function Sprint (props){
    const chosenSprint = useJiraFetch(`/sprint/${props.id}`)
    const sprintTasks = useJiraFetch(`/tasks/${props.id}`)
    const [sprintImage, setSprintImage] = useState();
    
    function getSubtasks(){
        //assigning emoji to task and every subtask
        if(sprintTasks){
            let subtasksArr = [];
            sprintTasks.forEach((issue, index) =>{
                const emoji = getEmoji(index);
                issue.emoji = emoji;
                if(issue.fields.subtasks ){
                    issue.fields.subtasks.forEach(subtask =>{
                        subtasksArr.push({...subtask, emoji})
                    })
                }
            })
            return subtasksArr
        }
    }
    
    if(!chosenSprint || !sprintTasks  ) return <h1>Loading sprint data...</h1>
     
    const validTasks = sprintTasks.filter(iss => iss.fields.subtasks.length>0);
    const cardCount = validTasks.length + getSubtasks().length; 
    
    return(
        <>
        <SprintControls tasks={cardCount} handleUpload={(val)=>{setSprintImage(val)}}/> 
        <div id="sprintBanner">
            <div id="sprintHeader">
                <div id="sprintInfo">
                    <h3 className="sprintName">{chosenSprint.name}</h3>
                    <h2 className="sprintGoal">{chosenSprint.goal}</h2>
                </div>
                {sprintImage && <img src={URL.createObjectURL(sprintImage)} alt="sprintImage" className="sprintImage"/>}
            </div>
            <div id="sprintTimeHolder">
                <div id="sprintStart" className="sprintTime">
                    <img src={startFlag} alt="startFlag"  />
                    <h3>{formatDate(chosenSprint.startDate)}</h3>
                </div>
                <div id="sprintEnd" className="sprintTime">
                    <img src={endFlag} alt="endFlag"/>
                    <h3>{formatDate(chosenSprint.endDate)}</h3>
                </div>
            </div>
        </div>
        {validTasks && <TasksList tasks={validTasks}/> }
        {validTasks && <SubtasksList subtasks={getSubtasks()}/>}
        </>
    )
    
}