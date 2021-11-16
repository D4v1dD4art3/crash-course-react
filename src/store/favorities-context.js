import { createContext, useState } from 'react';

const FavoritesContext = createContext({
  favorites: localStorage.getItem('favorites') || [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemsIsFavorite: (meetupId) => {},
});

export function FavoritesContextProvider(props) {
  const [userFavorites, setUserFavorites] = useState([]);

  function addFavoriteHandler(favoriteMeetup) {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.concat(favoriteMeetup);
    });
  }
  function removeFavoriteHandler(meetupId) {
    setUserFavorites((preUserFavorites) => {
      return preUserFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  }

  function itemsIsFavoriteHandler(meetupId) {
    return userFavorites.some((meetup) => meetup.id === meetupId);
  }

  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemsIsFavorite: itemsIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
}

export default FavoritesContext;
