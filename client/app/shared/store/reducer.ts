import { ADD_FAVORITE_CAR, REMOVE_FAVORITE_CAR, INIT_FAVORITE_CARS } from './actions';
import { IAppState } from './appState';

export function rootReducer(state: IAppState, action) {
    switch (action.type) {
        case INIT_FAVORITE_CARS:   
            return Object.assign({}, state, {
                ...state,
                favoriteCars: action.cars,
                lastUpdate: new Date()
            })
        case ADD_FAVORITE_CAR:   
            return Object.assign({}, state, {
                ...state,
                favoriteCars: [...state.favoriteCars, action.car],
                lastUpdate: new Date()
            })
        
        case REMOVE_FAVORITE_CAR:
            return Object.assign({}, state, {
                ...state,
                favoriteCars:  state.favoriteCars.filter(c => c._id != action.car._id),
                lastUpdate: new Date()
            })
        // case LOGIN:
        //     return Object.assign({}, state, {
        //         ...state,
        //         currentUser: action.currentUser,
        //         lastUpdate: new Date()
        //     })
        // case LOGOUT:
        //     return Object.assign({}, state, {
        //         ...state,
        //         currentUser: null,
        //         lastUpdate: new Date()
        //     })
    }
    return state;
}