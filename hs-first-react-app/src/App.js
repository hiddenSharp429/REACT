import logo from './logo.svg';
import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todos text="the first thing"/>
      <Todos text="the second thing"/>
      <Todos text="the last thing"/>
    </div>
  );
}

export default App;
