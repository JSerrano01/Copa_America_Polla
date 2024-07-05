import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/home';
import Teams from './components/Teams'


function App() {
  return (
    <div className="background-image min-h-screen bg-center bg-cover">
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/main" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/teams" element={
            <>
              <Header />
              <Teams />
              <Footer />
            </>
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

