import { createStore } from './redux/index.js';

import reducer from './reducers/index.js';

const store = createStore(reducer, { burn: 0, discount: 1360563 });

export default store;
