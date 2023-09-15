import React from 'react';
import './App.css';
import User from './src/User';
import Fetchdata from "./Fetchdata";
import Card from "./Card";

function App() {
  return (
    <>
    <Card />
   <Routes>
      <Route exact path='/' element={<User />} />
      <Route path='/Fetchdata' element={<Fetchdata />} />
      <Route path='/Card' element={<Card />} />
      </Routes>
    </>
  );
}

export default App;
