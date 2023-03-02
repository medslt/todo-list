import { render, screen, within, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event"

import App from '../App';



test('User story 2: should be able to create a task', () => {
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


test('User story 3: should be able to change the status of existing tasks', async () => {
    render(<App />);
  
    const taskDescription = 'new Task Description'

    const  createTaskEl = screen.getByRole('textbox', {
      name: /enter your new task:/i
    });
  
    // create new task 
    const addTaskBtn = screen.getByRole('button', {
      name: /add task/i
    })

    userEvent.type(createTaskEl, taskDescription)
    userEvent.click(addTaskBtn)


    const pendingListEl = screen.getByTestId('pendingTasks')

    const completedListEl = screen.getByTestId('completedTasks')

    // task should be added to the pending list by default
    let taskEl = within(pendingListEl).getByText(/new Task Description/i)
    
    // task should be  added to the pending list by default
    expect(taskEl).toBeInTheDocument()

    // Should be able to move the task to the completed list
    const checkboxEl =  within(pendingListEl).getByRole('checkbox', {
        name: /new Task Description/i
      })

    userEvent.click(checkboxEl)

     taskEl = within(completedListEl).getByText(/new Task Description/i)


     expect(taskEl).toBeInTheDocument()


     // Should be able to move back the task to the pending list
    userEvent.click(checkboxEl)

     taskEl = within(completedListEl).getByText(/new Task Description/i)

     expect(taskEl).toBeInTheDocument()
  });
  