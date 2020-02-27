import React from 'react';
import ReactDOM from 'react-dom';
import App from './Containers/App';
import Navbar from './Components/Navbar/Navbar'
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

function Index() {
  return (
    <div className="mainpage">
      <App className="top"></App>
      <Navbar className="navbar"></Navbar>
    </div>
  );
}
export default Index;

ReactDOM.render(<Index />, document.getElementById('root'));
serviceWorker.unregister();
