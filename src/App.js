import './App.css';
import Quiz from './Components/Quiz';
import raccoon from "./Images/raccoon.jpg"

function App() {
  return (
    <div className="App">
      <div className='startQuiz'>
        <Quiz/>
      </div>
      <button className='startBtn'>Start!</button>
    </div>
  );
}

export default App;
