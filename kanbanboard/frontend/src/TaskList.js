import React, { useEffect, useState } from 'react';
import styles from './assets/scss/Task.scss';
import TaskListItem from './TaskListItem';
function TaskList({no}) {
    const initTask = {no:0, name:'', done:'N', cardNo:no};
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState(initTask)

    useEffect(()=>{
        fetchTasks();
    }, [newTask]);

    const changeTaskDone = async(taskNo, done)=>{
        try{
            const response = await fetch(`/api/task/${taskNo}`, {
                method: 'put',
                headers:{
                    'Content-Type': 'application/x-www-form-urlencoded',
                    'Accept': 'application/json'
                },
                body: `done=${done}`
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }

            fetchTasks();
        }catch(err){
            console.error(err);
        }
    }

    const deleteTask = async(taskNo)=>{
        try{
            const response = await fetch('/api/task', {
                method: 'delete',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(taskNo)
            });
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            fetchTasks();
        }catch(err){
            console.error(err);
        }
    }

    const addTask = async(e)=>{
        try{
            const response = await fetch('/api/task', {
                method: 'post',
                headers:{
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setNewTask(initTask);
        }catch(err){
            console.error(err);
        }
    } 

    const fetchTasks = async()=>{
        try{
            const response = await fetch(`/api/task?no=${no}`, {
                method: 'get',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: null
            });
            
            if(!response.ok){
                throw new Error(`${response.status} ${response.statusText}`);
            }
            const json = await response.json();

            if(json.result !== 'success'){
                throw new Error(`${json.result} ${json.message}`);
            }
            setTasks(json.data);
        }catch(err){
            console.error(err);
        }
    };

    return (
        <>
            <div className={styles.TaskList}>
                <ul>
                {
                    tasks.map((task, i)=><TaskListItem key={i} task={task} deleteTask={deleteTask} changeTaskDone={changeTaskDone}/>)
                }
                </ul>
            </div>
            <input type='text'
                value={newTask.name}
                onChange={(e)=>setNewTask({
                    ...newTask,
                    name: e.target.value
                })}
                placeholder={'태스크 추가'}
                className={styles.TaskList__add_task}></input>
            <button onClick={addTask}>추가</button>
        </>
    );
}

export default TaskList;