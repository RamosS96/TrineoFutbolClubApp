import NavBar from './components/NavBar/NavBar';
import './App.css';

function App() {
  return (
    <div className="">
      <header className="">
        <NavBar ref1={"#news"} ref2={"#matches"} ref3={"#players"}/>
      </header>
      <section id='home'>
      </section>
      <section id='news'>
      </section>
      <section id='matches'>
      </section>
      <section id='players'>        
      </section>
    </div>
  );
}

export default App;
