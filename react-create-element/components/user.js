import { Component, createElement } from '../lib/react/index.js';

class User extends Component {
  render() {
    const { avatar, name } = this.props;

    return createElement(
      'div',
      { class: 'user' },
      createElement(
        'div',
        { class: 'avatar' },
        createElement(
          'img',
          { src: avatar, alt: 'avatar' }
        )
      ),
      createElement('h2', null, name)
    );
  }
}

export default User;
