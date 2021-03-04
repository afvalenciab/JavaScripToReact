import { Component, createElement } from '../lib/react/index.js';
import User from './user.js';
import Wrapper from './wrapper.js';
import UserStyled from './user-styled.js';

class App extends Component {
  render() {
    return createElement(
      'div',
      { 
        class: 'app'
      },
      new Wrapper({
        children: [
          createElement('h1', null, 'React.js ⭐️⭐️⭐️⭐️⭐️' ), 
          new User({ avatar: './images/ash.jpg', name: 'Ash', age: 10 }),
          new UserStyled({ avatar: './images/ash.jpg', name: 'Ash', age: 10 })
        ]
      })
    )
  }
}

export default App;
