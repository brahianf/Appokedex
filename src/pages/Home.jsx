import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataPoke } from '@actionsRedux/pokeActions';
import Pokemon from '@components/Pokemon';
import DetailView from '@components/DetailView';

const Home = (props) => {

  const { dataPoke, pokebyId } = props;

  const getPoke = async () => {
    await props.getDataPoke();
  };

  useEffect(async () => {
    getPoke();
  }, []);

  return (
    <div className='pokemon__view'>
      <div className='pokemon__view--item'>
        {dataPoke.map((poke) => (
          <Pokemon data={poke}  key={poke.id} />
        ))}
      </div>
      <DetailView data={pokebyId}/>
    </div>
  );
};

const mapStateToProps = ({ pokeReducer }) => pokeReducer;

const mapDispatchToProps = {
  getDataPoke,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);