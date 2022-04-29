import React, { useState } from 'react';
import axios from 'axios';
import Item from './Item';

function ItemListContainer({array}) {
  const [pokemonList, getItem] = useState([]);

  
  function handleAxios() {
    axios.get(array) 
      .then(res =>{getItem(res.data.results)} )
   }
  return (
    <div>
      <button onClick={handleAxios}>Generar Pokemon</button>
      {pokemonList.map(poke => <Item obj={poke}/>)}
    </div>
  );
}

export default ItemListContainer;