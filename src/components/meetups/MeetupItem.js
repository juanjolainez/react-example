import { useContext } from "react";

import Card from "./../ui/Card.js";
import classes from "./MeetupItem.module.css";
import FavouritesContext from "../../store/favorites-context.js";

function MeetupItem(props) {
  const favouritesCtx = useContext(FavouritesContext);

  const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);
  
  function toggleFavouriteStatusHandler() {
    if (itemIsFavourite) {
        favouritesCtx.removeFavourite(props.id);
    } else {
        favouritesCtx.addFavourite({
            id: props.id,
            title: props.title,
            description: props.description,
            image: props.image,
            address: props.address
        })
    }
  }

  return (
    <Card>
      <li className={classes.item}>
        <div className={classes.image}>
          <img src={props.image} alt=""></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'To favourites'}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;
