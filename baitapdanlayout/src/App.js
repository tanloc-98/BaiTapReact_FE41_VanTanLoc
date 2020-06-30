import React from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Container from './Components/Container';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <Container />
        <Footer />
    </div>
  );
}

export default App;
