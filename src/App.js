import './App.css';
import BarChart from "./Components/Bar Chart/BarChart";
import PieChart from "./Components/Pie Chart/PieChart";

function App() {
  return (
    <div className="App">
    <h1>React Graphs</h1>
      <div>
          <div className =" ui container">
            <BarChart/>
          </div>
          <br/>
          <div className =" ui container">
              <PieChart/>
          </div>

      </div>
    </div>
  );
}

export default App;
