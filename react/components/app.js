import { Component } from '../lib/react.js';
import User from './user.js';
import Wrapper from './wrapper.js';
import UserStyled from './user-styled.js';

class App extends Component {
  render() {
    return `
      <div class="app">
        ${new Wrapper({ 
          children: `
            <h1>React.js ⭐️⭐️⭐️⭐️⭐️</h1>
            ${new User({
              avatar: './images/ash.jpg',
              name: 'Ash'
            }).render()}
            ${new UserStyled({
              avatar: './images/ash.jpg',
              name: 'Ash Styled'
            }).render()}
          `
         }).render()}
      </div>
    `;
  }
}

export default App;
