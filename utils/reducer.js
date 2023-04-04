import { reducerCases } from "./Constants";

export const initialState = {
  
  
  album:[],
  tipo: "",
  IDalbum: "",
  artista: [],
  selectedPlaylistID:'1fz1LLmqt5GoRu3M8Ym9ME',
  
  token: null,
  userInfo: null,
  playlists: [],
  currentPlaying: null,
  playerState: false,
  selectedPlaylist: null,
  

};
const reducer = (state, action) => {
  switch (action.type) {
    case reducerCases.SET_TOKEN: {
      return {
        ...state,
        token: action.token,
      };
    }
   
    case reducerCases.SET_USER: {
      return { ...state,
         userInfo: action.userInfo };
    }

    default:
      return state;
  }
};

export default reducer;