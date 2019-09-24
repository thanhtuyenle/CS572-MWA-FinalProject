import { IAppState, INITIAL_STATE } from './appState';
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { rootReducer } from './reducer';
import { NgModule } from '@angular/core';

// @NgModule({
//     imports: [NgReduxModule, NgReduxRouterModule],
//     providers: [RootEpics],
//   })
//   export class StoreModule {
//     constructor(
//       public store: NgRedux<IAppState>,
//       devTools: DevToolsExtension,
//       ngReduxRouter: NgReduxRouter,
//       rootEpics: RootEpics,
//     ) {
//       // Tell Redux about our reducers and epics. If the Redux DevTools
//       // chrome extension is available in the browser, tell Redux about
//       // it too.
//       store.configureStore(
//         rootReducer,
//         {},
//         [ createLogger(), ...rootEpics.createEpics() ],
//         devTools.isEnabled() ? [ devTools.enhancer() ] : []);
  
//       // Enable syncing of Angular router state with our Redux store.
//       if (ngReduxRouter) {
//         ngReduxRouter.initialize();
//       }
  
//       // Enable syncing of Angular form state with our Redux store.
//       provideReduxForms(store);
//     }
//   }
  
export class AppModule {
    constructor (ngRedux: NgRedux<IAppState>) {
        ngRedux.configureStore(rootReducer, INITIAL_STATE);
    }
}