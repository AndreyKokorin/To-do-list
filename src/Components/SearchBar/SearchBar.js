import { useState } from "react";
import "./SearchBar.scss";
import arrow from "./Arrow.svg";

function SearchBar(props){
    const [newTask, setNewTask] = useState("");
    const [idCount, SetidCount] = useState(0)

    function getId(){
        SetidCount(idCount + 1)
        return idCount
    }

    function setTask(){
        if(newTask.length !== 0){
            props.addTask({id: getId(), task: newTask})
            setNewTask("");
        }
    }

    function OnEnter(e){
        if(e.key === "Enter"){
            setTask()
        }
    }

    return (
        <div className="search">
            <input type="text" placeholder="Добавить новое задание..." value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={OnEnter}/>
            <button><img src={arrow} alt="" onClick={setTask}/></button>
        </div>
    )
}

export default SearchBar;