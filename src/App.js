import './App.css';
import MuppetsProvider from './components/MuppetsProvider';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Headless Components
        </p>
      </header>
      <MuppetProvider>
        <h1>Muppets</h1>
        <p>lorem ipsum</p>
      </MuppetProvider>
    </div>
  );
}

export default App;
