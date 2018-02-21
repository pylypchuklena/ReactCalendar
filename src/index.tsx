import * as React from 'react';
import * as ReactDom from 'react-dom';

import { Provider } from 'react-redux';

// import { loadState, saveState } from './services/localStorageService';
import { AppComponent } from './components/AppComponent';


ReactDom.render(

        <AppComponent/>,

    document.getElementById("app") as HTMLElement
);


