import {TOGGLE_FAVORITE, ADD_FAVORITE, REMOVE_FAVORITE } from './../actions/favoritesActions';
const initialState = {
    favorites: [{
        id: 4,
        title: "Dumb and Dumber",
        director: "The Farely Brothers",
        metascore: 76,
        genre: "Comedy",
        description: "After a woman leaves a briefcase at the airport terminal, a dumb limo driver and his dumber friend set out on a hilarious cross-country road trip to Aspen to return it."
      }],
    displayFavorites: true
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case(TOGGLE_FAVORITE): {
            return {
                ...state,
                displayFavorites: !state.displayFavorites

            }
        }
        case(ADD_FAVORITE): {
            return{
                ...state,
                favorites: [...state.favorites, action.payload]

            }
        }
        case(REMOVE_FAVORITE): {
            return{
                ...state,
                favorites: state.favorites.filter(item => (item.id !== action.payload))

            }
        }
        default:
            return(state);
    }
}

export default favoritesReducer;