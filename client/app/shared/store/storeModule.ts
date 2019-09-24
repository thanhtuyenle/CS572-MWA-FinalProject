import { IAppState, INITIAL_STATE } from './appState';
import { NgRedux } from '@angular-redux/store';
import { rootReducer } from './reducer';

export class AppModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}