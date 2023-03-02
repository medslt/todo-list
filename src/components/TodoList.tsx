
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
    tasks: TaskType[]
}

type TaskProps= {
    task: TaskType
}

const Task = ({task}: TaskProps) => {
    const isCompleted = task.type === TaskTypes.COMPLETED
    return (
        <div key={task.id} style={{textDecoration: 'line-through'}} data-testid="task">
            <input type="checkbox" checked={isCompleted}  onChange={()=>{}} id={task.id} /> <label htmlFor={task.id}>{task.description} </label>
         </div>
    )
}
const TodoList = ({tasks}: TodoListProps) => {
    const pendingTasks: JSX.Element[] = []
    const completedTasks: JSX.Element[] = []
    
    tasks.forEach((task) => {
        if (task.type === TaskTypes.PENDING) {
            pendingTasks.push(<Task key={task.id} task={task}/>)
            return
        }

        completedTasks.push(<Task key={task.id} task={task}/>)
    })

    return (<> 
        {pendingTasks}
        {completedTasks}
     </>)
}


export default TodoList