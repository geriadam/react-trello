import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { history } from './helpers/history';
import HomePage from './pages/home';

function App() {
  return (
    <Router history={history}>
      <Routes>
        <Route path="/" element={<Navigate replace to="/v1" />} />
        <Route path='v1' element={<HomePage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
