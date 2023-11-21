import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRouter from './routers/';

function App() {
  return (
    <div className="App">
      <Router>
        <AppRouter />
      </Router>
    </div>
  );
}

export default App;