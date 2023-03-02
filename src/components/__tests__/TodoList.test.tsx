import { render, screen } from '@testing-library/react';
import TodoList, {TaskTypes} from '../TodoList';


const TasksData = [{
  id: 't1',
  description: 'ttoo',
  type: TaskTypes.PENDING
},
{
  id: 't2',
  description: 'tt44',
  type: TaskTypes.COMPLETED
}]

test('show all tasks', () => {
  render(<TodoList  tasks={TasksData}/>);

  expect(screen.getAllByTestId('task')).toHaveLength(2);
});
