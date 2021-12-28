import { useContext } from "react";
import {Link} from "react-router-dom";
import FavouritesContext from "../../store/favorites-context";
import classes from './MainNavigation.module.css';

function MainNavigation() {

    const favouritesContext = useContext(FavouritesContext);

    return <header className={classes.header}>
        <div className={classes.logo}>Reatch Meetups</div>
        <nav>
            <ul>
                <li><Link to="/">All Meetups</Link></li>
                <li><Link to="/new-meetup">New Meetup</Link></li>
                <li><Link to="/favourites">My Favourites <span className={classes.badge}>{favouritesContext.totalFavourites}</span></Link></li>
            </ul>
        </nav>
    </header>
}

export default MainNavigation;