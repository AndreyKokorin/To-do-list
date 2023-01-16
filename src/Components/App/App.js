import { useState, useEffect } from 'react';
import './App.scss';
import SearchBar from '../SearchBar/SearchBar';
import Tasks from '../Tasks/Tasks';


function App() {
  const [tasks, setTasks] = useState([]);
  const [willDeliteTask, setwillDeliteTask] = useState([]);

  function addTask(task){
    setTasks([...tasks, task])
  }

  function deliteComplitedTasks(task){
    setwillDeliteTask(task);
  }

  useEffect(() => {
    const newTasks = tasks.slice(0);
    willDeliteTask.forEach(item => {
      let index = newTasks.findIndex(task => task.id === item);
      console.log(index);

      if(index != -1){
        newTasks.splice(index, 1);
      }
      else{
        console.log(-1)
      }
    })

    setTasks(newTasks);
  }, [willDeliteTask])


  return (
    <div className="App">
      <div className="App_wrapper">
          <SearchBar addTask={addTask}/>
          <Tasks tasks={tasks} deliteComplitedTasks={deliteComplitedTasks}/>
        </div>
    </div>
  );
}

export default App;
