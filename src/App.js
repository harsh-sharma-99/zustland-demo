import './App.css';
import Form         from './components/form';
import List         from './components/list';
import { useState } from "react"

function App() {
  const [list, setList] = useState([]);
  return (
    <div className="container">
      <Form 
        setList = {setList}
      />
      <List 
        list = {list}
      />
    </div>
  );
}

export default App;

