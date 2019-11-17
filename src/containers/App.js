import React from 'react';
import '../assets/style/App.css';
import {Header} from '../components/Header';
import  {Main} from '../containers/Main'
import {Footer} from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
