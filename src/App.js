import './App.css';
import Trading from './components/Trading';

function App() {
  return (
    <div className="App">
      <div className="wrapper" style={{ height: "70vh" }}>
        <h1>Trading chart </h1>
        <Trading />
      </div>
    </div>
  );
}

export default App;
