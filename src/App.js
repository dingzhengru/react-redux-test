import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter.value);
  const dispatch = useDispatch();

  const handleCounterIncrease = () => {
    dispatch({ type: 'counter/increase' });
  };

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="App-logo" alt="logo" width="100" />
      </header>
      <div>
        <h2>Redux</h2>
        <p>
          counter: {counter}
          <button onClick={handleCounterIncrease}>dispatch('counter/increase')</button>
        </p>
      </div>
    </div>
  );
}

export default App;
