import NavBar from './components/NavBar/NavBar';
import './App.css';
import './bootstrap-grid.min.css';
import PlayersContainer from './pages/players/PlayersContainer';
import React from 'react';
import { initializeApp } from "firebase/app";
import { Route, Routes } from 'react-router';
import HomeContainer from './pages/home/HomeContainer';

const firebaseConfig = {
  apiKey: "AIzaSyC4j7iBZ84btYBcd8ANWP0VLEHJUas2PJ4",
  authDomain: "trineo-app.firebaseapp.com",
  projectId: "trineo-app",
  storageBucket: "trineo-app.appspot.com",
  messagingSenderId: "495252829451",
  appId: "1:495252829451:web:8045ab795194e571e7de0e",
  measurementId: "G-3289JK9TW1"
};

initializeApp(firebaseConfig);

function App() {
  

  return (
    <div>
        <NavBar ref1={"#news"} ref2={"#matches"} ref3={"#players"}/>
        <Routes>
          <Route path='' element={<HomeContainer/>}/>
          <Route path='/players' element={<PlayersContainer/>}/>
        </Routes>
               

    </div>
  );
}

export default App;
