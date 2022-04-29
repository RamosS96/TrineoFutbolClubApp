import NavBar from './components/NavBar/NavBar';
import './App.css';
import './bootstrap-grid.min.css';
import ItemListContainer from './components/ItemList/ItemListContainer';
import axios from 'axios';

const pokeapi = 'https://pokeapi.co/api/v2/pokemon/';
const queco = 'https://raw.githubusercontent.com/RamosS96/Queco/master/recipes/recipes.json';

function App() {
  axios.get(queco)
  .then(res => console.log(res.data.recipes.cakes))

  return (
    <div className="">
      <header className="">
        <NavBar ref1={"#news"} ref2={"#matches"} ref3={"#players"}/>
      </header>
      <section className='container' id='home'>
      </section>
      <section className='container' id='news'>
      <li className='navBar-item'><ItemListContainer array={pokeapi}/></li>
      </section>
      <section className='container' id='matches'>
      </section>
      <section className='container' id='players'>        
      </section>
    </div>
  );
}

export default App;
