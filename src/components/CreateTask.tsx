import style from "./CreateTask.module.css";

type CreateTaskProps = {
  handleCreateTask: (description: string) => void;
};

const CreateTask = ({ handleCreateTask }: CreateTaskProps) => {
  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    // Prevent the browser from reloading the page
    e.preventDefault();

    const form = e.target as HTMLFormElement;

    const formData = new FormData(form);

    const formJson = Object.fromEntries(formData.entries());

    const description = formJson.description as string;

    handleCreateTask(description);
    form.reset();
  };

  return (
    <div>
      <form className={style.form} method="post" onSubmit={handleSubmit}>
        <label className={style.create}>
          Enter your new Task:
          <textarea
            name="description"
            placeholder="Enter your new Task"
            rows={4}
            cols={40}
          />
        </label>
        <hr />
        <button className={style.action} type="submit">
          Add Task
        </button>
        <button className={style.action} type="reset">
          Reset
        </button>
      </form>
    </div>
  );
};

export default CreateTask;
