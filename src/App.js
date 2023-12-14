import './App.css';
import SearchableDatabase from './SearchableDatabase';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <br></br>
      <h1 style={{ color: '#33ff33', margin: '20px'}}>User Database</h1>
      <SearchableDatabase />
    </div>
  );
}

export default App;
