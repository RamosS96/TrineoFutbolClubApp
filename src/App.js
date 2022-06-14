import NavBar from './components/NavBar/NavBar';
import './App.css';
import './bootstrap-grid.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import PlayersContainer from './pages/players/PlayersContainer';
import React from 'react';
import { initializeApp } from "firebase/app";


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
    <div className="">
      <header className="">
        <NavBar ref1={"#news"} ref2={"#matches"} ref3={"#players"}/>
      </header>
      <section className='container' id='home'>
      </section>
      <section className='container' id='news'>
      
      </section>
      <section className='container' id='matches'>
      </section>
      <section className='container' id='players'>
        <PlayersContainer/>        
      </section>
    </div>
  );
}

export default App;
