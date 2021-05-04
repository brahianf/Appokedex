import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDataPoke } from '@actionsRedux/pokeActions';

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
        </div>
    </div>
  );
};

const mapStateToProps = ({ pokeReducer }) => pokeReducer;

const mapDispatchToProps = {
  getDataPoke,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);