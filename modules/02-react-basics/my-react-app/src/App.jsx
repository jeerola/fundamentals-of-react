import './App.css'
import useTimer from './exercises/timer';

function App() {
  const currentTime = useTimer();
  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Current Time</h2>
      {currentTime}
    </div>
  );
}

export default App
