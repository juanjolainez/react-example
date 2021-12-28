import { createContext, useState } from "react";

const FavouritesContext = createContext({
    favourites: [],
    totalFavourites: 0,
    addFavourite: (favouriteMeetup) => {},
    removeFavourite: (meetupId) => {},
    itemIsFavourite: (meetupId) => {},
});

export function FavouritesContextProvider(props) {

    const [userFavourites, setUserFavourites] = useState([]);

    function addFavouriteHandler(favouriteMeetup) {
        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.concat(favouriteMeetup)
        });
    }

    function removeFavouriteHandler(meetupId) {
        setUserFavourites((prevUserFavorites) => {
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavouriteHanlder(meetupId) {
        return userFavourites.some(meetup => meetup.id === meetupId);
    }

    const context = {
        favourites: userFavourites,
        totalFavourites: userFavourites.length, 
        addFavourite: addFavouriteHandler,
        removeFavourite: removeFavouriteHandler, 
        itemIsFavourite: itemIsFavouriteHanlder
    };

    return <FavouritesContext.Provider value={context}>
        {props.children}
    </FavouritesContext.Provider>
}

export default FavouritesContext;