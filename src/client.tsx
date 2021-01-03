import * as React from 'react';
import * as ReactDOM from 'react-dom';
//import NumberBaseball from './numberBaseball/NumberBaseball';
// import ResponseCheck from './responseCheck/ResponseCheck';
//import GuGuDan from './guguDan/GuGuDan';
//import WorldRelay from './wordRelay/WordRelay';
//import RSP from './RSP/RSP';
// import Lotto from './lotto/Lotto';
import App from './App';
import { Provider } from 'react-redux';
import store from './modules/store';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
