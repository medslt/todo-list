import React from 'react';
import style from './TodoList.module.css'

export enum TaskTypes {
    COMPLETED='completed',
    PENDING='pending'
} 

export type TaskType = {
    id: string,
    description: string,
    type: TaskTypes
}


type TodoListProps = {
    tasks: TaskType[],
    updateTaskType: (type: TaskTypes, taskId: string) => void
}

type TaskProps= {
    task: TaskType
    updateTaskType: (type: TaskTypes, taskId: string) => void
}

const Task = ({task, updateTaskType}: TaskProps) => {
    const isCompleted = task.type === TaskTypes.COMPLETED
    const handleTaskCheckbox: React.ChangeEventHandler<HTMLInputElement>  = (e) => {
            const isChecked = e.target.checked

            const newTaskType = isChecked? TaskTypes.COMPLETED : TaskTypes.PENDING

            updateTaskType(newTaskType, task.id)
    }

    return (
        <div key={task.id}  className={isCompleted? style.completed : ''} data-testid="task">
            <label htmlFor={task.id}>
                <input type="checkbox" checked={isCompleted}  onChange={handleTaskCheckbox} id={task.id} /> 
                {task.description} 
            </label>
         </div>
    )
}

const TodoList = ({tasks, updateTaskType}: TodoListProps) => {
    const pendingTasks: JSX.Element[] = []
    const completedTasks: JSX.Element[] = []
    
    tasks.forEach((task) => {
        if (task.type === TaskTypes.PENDING) {
            pendingTasks.push(<Task key={task.id} task={task} updateTaskType={updateTaskType}/>)
            return
        }

        completedTasks.push(<Task key={task.id} task={task}  updateTaskType={updateTaskType}/>)
    })

    return (
        <div> 
            <h3>Tasks</h3>
            <div data-testid="pendingTasks">
                {pendingTasks.length ? pendingTasks : 'No pending Tasks'}
            </div>
           
            <hr />
            <div data-testid="completedTasks">
             {completedTasks}
            </div>
        </div>
    )
}


export default TodoList