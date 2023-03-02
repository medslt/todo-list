import { render, screen } from '@testing-library/react';
import userEvent from "@testing-library/user-event"

import App from '../App';



test('should be able to create a task', () => {
  render(<App />);

  const taskDescription = 'new Task Description'
  const  createTaskEl = screen.getByRole('textbox', {
    name: /enter your new task:/i
  });

  const addTaskBtn = screen.getByRole('button', {
    name: /add task/i
  })

  userEvent.type(createTaskEl, taskDescription)
  userEvent.click(addTaskBtn)


  expect(screen.getByText(/new Task Description/i)).toBeInTheDocument();
});
