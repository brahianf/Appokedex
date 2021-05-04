import React, { useState } from 'react';
import { connect } from 'react-redux';
import { selectedPoke, getDataPokeById } from '@actionsRedux/pokeActions';


const Search = (props) => {

  const { dataPoke } = props;

  const [search, setSearch] = useState({
    seeker: []
  });

  const handleInput = (event) => {
    setSearch({
      ...search,
      [event.target.name]: event.target.value,
    });
  };

  const handleClick = async (event) => {
    event.preventDefault();
    if(search.seeker.length != 0 ){
      const pokebyId = dataPoke.find(poke => poke.name == search.seeker || poke.id == search.seeker);
      if(pokebyId){
        props.selectedPoke(pokebyId);
      } else {
        props.getDataPokeById(search.seeker);
      }
    } else {
      alert('Key id or name of Pokemon')
    }
  };

  return (
    <div className='header__search'>
      <input
        className='header__search--input'
        type='text'
        onChange={(e) => handleInput(e)}
        id='seeker'
        name='seeker'
        aria-label='seeker'
        type='text'
        placeholder='Search Pokemon'
      />

      <button
        className='header__search--button'
        onClick={(e) => handleClick(e)}
      >
        🔍
      </button>
    </div>
  );
};

const mapStateToProps = ({ pokeReducer }) => pokeReducer;

const mapDispatchToProps = {
  selectedPoke,
  getDataPokeById
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);