import {
  AnyAction,
  applyMiddleware,
  createStore,
  Dispatch,
  MiddlewareAPI,
} from 'redux';
import reducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import Thunk from 'redux-thunk';

const firstMiddleWare = (store: MiddlewareAPI) => (
  next: Dispatch<AnyAction>
) => (action: AnyAction) => {
  console.log('로깅', action, store);
  next(action);
};

const enhancer =
  process.env.NODE_ENV === 'production'
    ? applyMiddleware(firstMiddleWare)
    : composeWithDevTools(applyMiddleware(firstMiddleWare, Thunk));

const store = createStore(reducer, enhancer);
export default store;
