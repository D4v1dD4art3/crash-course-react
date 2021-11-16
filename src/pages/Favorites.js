import FavoritesContext from '../store/favorities-context';
import { useContext } from 'react';
import MeetupList from '../components/meetups/MeetupList';
function Favorites() {
  const favoriteCtx = useContext(FavoritesContext);
  let content;
  if (favoriteCtx.totalFavorites === 0) {
    content = <p>no favorites add some?</p>;
  } else {
    content = <MeetupList meetups={favoriteCtx.favorites} />;
  }
  return (
    <div>
      <h1> My favorites</h1>
      {content}
    </div>
  );
}
export default Favorites;
