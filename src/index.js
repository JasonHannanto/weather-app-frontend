import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello World
        </p>
      </header>
    </div>
  );
}
export default App;

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
