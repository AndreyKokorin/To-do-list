import { useState } from "react";
import "./Tasks.scss";
import check from "./Check.svg"

function Tasks(props){
    const [complitedList, setCompliteList] = useState([]);

    function deliteComplited(id){
        const index = complitedList.findIndex(elem => elem==id);
        console.log(index)
        const newArr = complitedList;
        complitedList.splice(index, 1);
        console.log(complitedList)
        setCompliteList(newArr)
    }

    

    return (
        <div className="tasks">
            <div className="tasks__items">
                 {props.tasks.map((i, num) => <Task 
                 task={i.task} 
                 key={i.id} 
                 complitedList={complitedList} 
                 setCompliteList={setCompliteList} 
                 id={i.id}
                 deliteComplited={deliteComplited}/>)} 
           </div>
           <div className="tasks__info">
                <div className="tasks__info_how">
                    Всего заданий {props.tasks.length}
                </div>
                <div className="tasks__info_clearBtn" onClick={() => props.deliteComplitedTasks(complitedList)}>
                    Удалить выполненые задания
                </div>
           </div>
        </div>
    )
}

function Task(props){
    const [complite, setComlite] = useState(false);
    const {task, complitedList, setCompliteList, id, deliteComplited} = props;
    const checkImg = <div><img src={check} alt="" /></div>

    
    function clickComplite(){
        setComlite(!complite);
        (!complite) ?  setCompliteList([...complitedList, id]): deliteComplited(id);
    }

    return (
        <div className="task">
            
               <div className={(complite) ? "task__btn task__complite" : "task__btn"} 
               onClick={clickComplite} 
               >
                    {(complite) ? checkImg : null}
                </div>
                <div className={(complite) ? "task__text task__linethrough" : "task__text"}>
                    {task}
                </div> 
          
        </div>
    )
}

export default Tasks;