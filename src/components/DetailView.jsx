import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Carousel from 'react-elastic-carousel';
import pokemonBall from '@images/pokemon-ball.png';
import likeicon from '@images/like-icon.png';


const DetailView = (props) => {

  const { data } = props;

  const handleClick = async (event) => {
    event.preventDefault();
    const $like = document.getElementById('like');
    $like.classList.toggle('is-liked');
  };


  if(data.length != 0 ){
    const officialArtwork= `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`;
    return (
      <section className="hero">
        <div className="container hero-containerDescription">
            <div className="hero-containerDescription--child">
              <Carousel itemsToShow={1}>
                <figure className="heroImg">
                    <img src={officialArtwork} alt="Imgage Pokedex"></img>
                </figure>
                {/* <figure className="hero-containerImage">
                    <img src={data.sprites.front_default} alt="Imgage Pokedex"></img>
                </figure>
                <figure className="hero-containerImage">
                    <img src={data.sprites.back_default} alt="Imgage Pokedex"></img>
                </figure> */}
              </Carousel>
              <div className="like-box">
                <div 
                  className="like" 
                  id="like" 
                  style={{backgroundImage: `url(${likeicon})`}}
                  onClick={ handleClick}
                ></div>
              </div>
              <p>
                ✔ Id:      {data.id}<br/>
                ✔ Name:    {data.name}<br/>
                ✔ type:    {data.types[0].type.name}<br/>
                ✔ Ability: {data.abilities[0].ability.name} <br/>
              </p>
            </div>
        </div>
      </section>
    );
  } else {
    return (
      <section className="hero">
          <div className="container hero-containerDescription">
              <div>
                  <figure className="hero-containerImage">
                    <img src={pokemonBall} alt="Imgage Pokedex" width="90%" height="90%"></img>
                  </figure>
                  <p> Select or Search Pokemon</p>
              </div>
          </div>
        </section>
    )
  }
};

const mapStateToProps = ({ pokeReducer }) => pokeReducer;

export default connect(mapStateToProps, null)(DetailView);
