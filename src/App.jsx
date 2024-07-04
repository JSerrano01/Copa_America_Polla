// import React, { useState } from 'react';
// import axios from 'axios';

// function App() {
//   const [responseMessage, setResponseMessage] = useState('');

//   const sendMessage = () => {
//     axios.post('http://localhost:5000/api/')
//       .then(response => {
//         setResponseMessage(response.data.message);
//       })
//       .catch(error => {
//         console.error("There was an error!", error);
//       });
//   };

//   return (
//     <div className="App">
//       <header className="App-header">
//         <button onClick={sendMessage}>Send Message</button>
//         {responseMessage && <p>{responseMessage}</p>}
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginForm />} />
        <Route path="/home" element={<>
          <Header />
          <Footer />
        </>} />
      </Routes>
    </Router>
  );
}

export default App;

