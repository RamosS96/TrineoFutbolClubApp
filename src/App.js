import NavBar from './components/NavBar';
import Footer from './components/Footer';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';
import './utils/fonts/fonts.css';
import React from 'react';
import { initializeApp } from "firebase/app";
import { Route, Routes } from 'react-router';
import PlayersContainer from './pages/players/';
import HomeContainer from './pages/home/';
import NewsContainer from './pages/news';
import MatchesContainer from './pages/matches';
import PlayerStats from './pages/playerstats';
import MatchesList from './pages/matcheslist';
import NewsExpanded from './pages/NewsExpanded';

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
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<HomeContainer />} />
        <Route path='/news' element={<NewsContainer />} />
        <Route path='/news/:idParamNew' element={<NewsExpanded />} />
        <Route path='/matches/:idParamMatch' element={<MatchesContainer />} />
        <Route path='/players' element={<PlayersContainer />} />
        <Route path='/players/:idParamPlayer' element={<PlayerStats />} />
        <Route path='/matches' element={<MatchesList />} />
      </Routes>
      <Footer />

    </>
  );
}

export default App;
