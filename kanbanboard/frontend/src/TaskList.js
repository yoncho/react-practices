import React, { useEffect, useState } from 'react';
import styles from './assets/scss/Task.scss';
import TaskListItem from './TaskListItem';
function TaskList({no}) {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState({no:0, name:'', done:'N', cardNo:no})

    useEffect(()=>{
        fetchTasks();
    }, [newTask]);

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
            console.log(response);
            fetchTasks();
            // const json = await response.json();
            // console.log(json);
            // if(json.result !== 'success'){
            //     throw new Error(`${json.result} ${json.message}`);
            // }
            // setNewTask({no:0, name:'', done:'N', cardNo:no});
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
            setNewTask({no:0, name:'', done:'N', cardNo:no});
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
            console.log(json.data);
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
                    tasks.map((task, i)=><TaskListItem key={i} task={task} deleteTask={deleteTask}/>)
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