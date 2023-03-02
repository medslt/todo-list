import TodoList, {TaskTypes} from './components/TodoList'

const Tasks = [{
  id: 't1',
  description: 'ttoo',
  type: TaskTypes.PENDING
},
{
  id: 't2',
  description: 'tt44',
  type: TaskTypes.COMPLETED
}]

function App() {
  return (<TodoList tasks={Tasks}/>);
}

export default App;
