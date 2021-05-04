import React from 'react';
import { Link } from 'react-router-dom';
import pokemonBall from '@images/pokemon-ball.png';

const NotFound = () => (
  <div>
    <h1>Not Found</h1>
    <figure className="hero-containerImage">
      <img src={pokemonBall} alt="Imgage Pokedex" width="30%"></img>
    </figure>
</div>
);

export default NotFound;