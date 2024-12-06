import {createStore} from 'redux';
import incrementDecrement from './reducer';

const store = createStore(incrementDecrement, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;