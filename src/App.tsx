import React, {useState} from 'react';
import './App.css';
import Matrix from "./component/Matrix";
import BarChart from "./component/BarChart";

function App() {

  const [data, setData] = useState<any>([]);

  return (
    <div className="App">
      <Matrix sequenceResult={(d=> setData(d))}/>
      <BarChart dataSet={data}/>
    </div>
  );
}

export default App;
