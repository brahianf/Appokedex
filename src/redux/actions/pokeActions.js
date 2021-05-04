const URL_API = process.env.API;

export const getDataPoke = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}pokemon?limit=500`);
    const data = await response.json();
    data.results.forEach( async (item, index) => {
      const response = await fetch(`${URL_API}pokemon/${item.name}`);
      const data = await response.json();
      if(index===0){
        selectedPoke(data);
      }
      dispatch({
        type: 'DATA_ALL_POKE',
        payload: data,
      });
    })
  } catch (err) {
    console.log('getAllPoke -> err', err);
  }
};

export const selectedPoke = (data) => async (dispatch) => {
  dispatch({
    type: 'DATA_BY_ID',
    payload: data,
  });
};

export const getDataPokeById = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}pokemon/${id}`);
    if(response.status === 404){
      alert('Not Found Pokemon')
    }
    const data = await response.json();
    dispatch({
      type: 'DATA_BY_ID',
      payload: data,
    });
  } catch (err) {
    console.log('getPokeById -> err', err);
  }
};

export const setFavPoke = (id) => async (dispatch) => {
  try {
    const response = await fetch(`${URL_API}/auth/sign-in`, {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
        'mode': 'cors',
        'Authorization': `Basic ${Buffer.from(`${id}}`).toString('base64')}`,
      }),
      body: JSON.stringify(`'apiKeyToken'  ${':'} 'e'`),
    });

    const data = await response.json();
    dispatch({
      type: 'DATA_FAV',
      payload: data,
    });
  } catch (err) {
    console.log('getFavoritesPoke -> err', err);
  }
};