import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './components/Navigation';
import './css/index.css';


const App = () => {
  return (
    <div style={ { display: "flex", flexDirection: "row"} }>
      <Navigation />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
