import { setConfiguration } from 'react-grid-system';
import './App.css';
import { GameTable } from './components/GameTable';

setConfiguration({ gridColumns: 14, gutterWidth: 0 });

const App = () => {
  return (
    <>
      <GameTable colorOne="red" colorTwo="black" tableColor="green" />
    </>
  );
};

export default App;
