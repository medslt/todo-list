import { TaskType, TaskTypes } from "./TodoList";
import style from "./Task.module.css";

type TaskProps = {
  task: TaskType;
  updateTaskType: (type: TaskTypes, taskId: string) => void;
};

const Task = ({ task, updateTaskType }: TaskProps) => {
  const isCompleted = task.type === TaskTypes.COMPLETED;
  const handleTaskCheckbox: React.ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    const isChecked = e.target.checked;

    const newTaskType = isChecked ? TaskTypes.COMPLETED : TaskTypes.PENDING;

    updateTaskType(newTaskType, task.id);
  };

  return (
    <div
      key={task.id}
      className={isCompleted ? style.completed : ""}
      data-testid="task"
    >
      <label htmlFor={task.id}>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={handleTaskCheckbox}
          id={task.id}
        />
        {task.description}
      </label>
    </div>
  );
};

export default Task;
