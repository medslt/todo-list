import { useState } from "react";
import TodoList, { TaskTypes, TaskType } from "./TodoList";
import CreateTask from "./CreateTask";
import style from "./App.module.css";

function App() {
  const [tasks, setTasks] = useState<TaskType[]>([]);

  const handleCreateTask = (description: string) => {
    if (description.length) {
      const newTask = {
        id: String(tasks.length),
        description: description,
        type: TaskTypes.PENDING,
      };

      setTasks([newTask, ...tasks]);
    }
  };

  const updateTaskType = (type: TaskTypes, taskId: string) => {
    const taskToUpateIdex = tasks.findIndex((task) => task.id === taskId);

    const newTasks = [...tasks];

    newTasks[taskToUpateIdex] = { ...tasks[taskToUpateIdex], type };

    setTasks(newTasks);
  };
  return (
    <div className={style.app}>
      <CreateTask handleCreateTask={handleCreateTask} />
      <TodoList tasks={tasks} updateTaskType={updateTaskType} />
    </div>
  );
}

export default App;
