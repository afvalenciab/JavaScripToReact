import { Component, createElement } from '../lib/react/index.js';

class User extends Component {
  state = {
    age: this.props.age
  };

  componentWillMount() {
    console.log('El componente se va a renderizar por primera vez');
  }

  componentDidMount() {
    console.log('El componente se renderizó');
  }

  componentDidUpdate() {
    console.log('El compnente se actualizó');
  }

  handleClick = (event) => {
    console.log(this.state);
    this.setState({ age: this.state.age + 1 });
  }

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;

    return createElement(
      'div',
      { 
        onClick: this.handleClick,
        class: 'user'
      },
      createElement(
        'div',
        { class: 'avatar' },
        createElement(
          'img',
          { src: avatar, alt: 'avatar' }
        )
      ),
      createElement('h2', null, `Hola soy ${name} y tengo ${age} años`)
    );
  }
}

export default User;
