import Card from '../ui/Card';
import classes from './MeetupItem.module.css';

function MeetupItem(props) {
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
          <button>to favorites</button>
        </div>
      </Card>
    </li>
  );
}
export default MeetupItem;
