import React from 'react';
import '../assets/style/App.css';
import {Header} from '../components/Header';
import  {MainContainer} from '../routers/main'
import {Footer} from '../components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
        <MainContainer />
      <Footer />
    </div>
  );
}

export default App;
