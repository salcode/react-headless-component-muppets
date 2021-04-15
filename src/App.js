import './App.css';
import MuppetsProvider from './components/MuppetsProvider';
import MuppetList from './components/MuppetList';

function App() {
  return (
    <div className="App">
      <MuppetsProvider>
        <MuppetList />
      </MuppetsProvider>
    </div>
  );
}

export default App;
