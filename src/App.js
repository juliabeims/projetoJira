import { useState } from "react";
import Board from "./component/board";
import Header from "./component/header";



function App() {

  const [issues,setIssues] = useState([])
  const addNewIssue = (issue) => {
    console.log(issues)
    setIssues([...issues,issue])
  }

  return (
    <div className="App">
        <Header addNewIssue = {addNewIssue}/>
        <Board issues={issues} />  
    </div>
  );
}

export default App;
