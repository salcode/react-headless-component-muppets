import './App.css';
import MuppetsProvider from './components/MuppetsProvider';
import MuppetList from './components/MuppetList';
import Muppet from './components/Muppet';

function App() {
  return (
    <div className="App">
      <MuppetsProvider>
        <MuppetList Muppet={Muppet} />
      </MuppetsProvider>
    </div>
  );
}

export default App;
