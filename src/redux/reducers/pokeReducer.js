
const INITIAL_STATE = {
  error: null,
  loading: true,
  dataPoke: [],
  pokebyId: [],
  favPokers: [],
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'DATA_ALL_POKE':
      return {
        ...state,
        dataPoke: [...state.dataPoke, action.payload],
        loading: false,
        error: null,
      };
      case 'DATA_BY_ID':
        return {
          ...state,
          pokebyId: action.payload,
          loading: false,
          error: null,
        };
    case 'DATA_FAV':
      return {
        ...state,
        favPoke: [...state.favPoke, action.payload],
        loading: false,
        error: null,
      };
    default:
      return state;
  }
};
