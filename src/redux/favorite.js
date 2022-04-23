//ACTON TYPES
const ADD_FAVORITE = "ADD_FAVORITE";
const REMOVE_FAVORITE = "REMOVE_FAVORITE";

export const addFavorite = (id) => ({
    type: ADD_FAVORITE,
    payload: {
      id,
    },
  });
  
  export const removeFavorite = (id) => ({
    type: REMOVE_FAVORITE,
    payload: id,
  });

  
//REDUCER
const favoriteReducer = (favorites =[], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
        return [...favorites, action.payload ]
    case REMOVE_FAVORITE:
      return favorites?.filter((item) => item.id !== action.payload)
    default:
      return favorites;
  }
};

export default favoriteReducer;