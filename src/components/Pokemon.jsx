import React, { Fragment, useEffect, useRef, useState}  from 'react';
import { connect } from 'react-redux';
import pokemonBall from '@images/pokemon-ball.png';
import { selectedPoke } from '@actionsRedux/pokeActions';
import styled from 'styled-components';

const Article = styled.article`min-height: 150px;`

const Pokemon = (props) => {

  const { data } = props;
  const element = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(()=> {
    // console.log(element.current);
    const observer = new window.IntersectionObserver(function(entries){
      const { isIntersecting } = entries[0];
      if(isIntersecting){
        setShow(true);
        observer.disconnect();
      }
    });
    observer.observe(element.current);
  }, [element]);

  const handleClick = () => {
    props.selectedPoke(data);
  };

  if(data){
    const url_img = data.sprites.other.dream_world.front_default;
    return (
      <Article ref={element}>
        {
          show && <Fragment>
            <figure className="hero-containerImage fadeIn">
              <img src={url_img} alt="Imgage Pokedex" onClick={handleClick}></img>
              </figure>
            <p onClick={handleClick}>{data.name}</p>
          </Fragment> 
        }
      </Article>
    );
  }else{
    return (
      <div>
        <figure className="hero-containerImage">
          <img src={pokemonBall} alt="Imgage Pokedex"></img>
        </figure>
        <p>loading</p>
      </div>
    );
  }
}


const mapDispatchToProps = {
  selectedPoke
};

export default connect(null, mapDispatchToProps)(Pokemon);