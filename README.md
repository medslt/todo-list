# Todo list
Technical task for a job interview. For more details see https://github.com/medslt/todo-list/blob/main/NovaFori%20Developer%20Test.pdf

## Setup
Run `npm install`, then run `npm start` to start the application and `npm test` to run the tests.


### Technical environment
- TypeScript
- React hooks
- CSS Module
- Jest and React testing-library

## Code architecture

***`src/components/App.tsx`*** The start of the application and contains all the logic  
***`src/components/TodoList.tsx`*** a component to display the list of tasks
***`src/components/Task.tsx`*** a component to display on task
***`src/components/CreateTask.tsx`*** a component to create a task

## Spec questions
• How long did you spend on your solution? around 4 hours  

• How do you build and run your solution? [creat-react-app](https://create-react-app.dev/)


• What technical and functional assumptions did you make when implementing
your solution?
  - split the logic into small components 
  - manage the state in one place (App.tsx) and share the data and action between the other component
  
    

