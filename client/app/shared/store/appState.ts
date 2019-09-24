import { Car } from '../models/car.model';
// import { User } from '../models/user.model';

export interface IAppState {
    favoriteCars: Car[];
    // currentUser: User;
    lastUpdate: Date;
}

export const INITIAL_STATE: IAppState = {
    favoriteCars: [],
    // currentUser: null,
    lastUpdate: null
}