import { useContext } from 'react';
import Card from '../ui/Card';
import classes from './MeetupItem.module.css';
import FavoritesContext from '../../store/favorities-context';
function MeetupItem(props) {
  const favoriteCtx = useContext(FavoritesContext);

  const itemsIsFavorite = favoriteCtx.itemsIsFavorite(props.id);

  function toggleFavoriteStatusHandler() {
    if (itemsIsFavorite) {
      favoriteCtx.removeFavorite(props.id);
    } else {
      favoriteCtx.addFavorite({
        id: props.id,
        title: props.title,
        description: props.description,
        image: props.image,
        address: props.address,
      });
    }
  }
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image} alt={props.title} />
        </div>
        <div>
          <h3 className={classes.content}>{props.title}</h3>
          <address className={classes.content}>{props.address}</address>
          <p className={classes.content}>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemsIsFavorite ? 'remove from favorites' : 'To Favorites'}
          </button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
