import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';
import { Deploy } from './Component/Deploy'

function App() {
  const [state, changeState] = useState({})

  useEffect(() => {
    fetch("/api").then(response => {
      if (response.status == 200)
      {
        return response.json()
      }
    }).then(data => console.log(data))
  }, [])
  return (
    <div className="App">
      <Deploy />
    </div>
  );
}

export default App;
   