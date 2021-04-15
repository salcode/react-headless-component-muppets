import './App.css';
import MuppetList from './components/MuppetList';
import withMuppets from './components/withMuppets';

function App() {
  const MuppetListWithMuppets = withMuppets(MuppetList);
  return (
    <div className="App">
      <MuppetListWithMuppets />
    </div>
  );
}

export default App;
