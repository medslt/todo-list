import Task from './Task';

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