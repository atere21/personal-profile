import React, {state, useState} from "react"
import Sidebar from './Sidebar'
import "./App.css";


function App() {
  const [state, setState] =useState(false)
  
  return (
    <div className="app">
           <Sidebar />
      </div>
  );
}

export default App;
