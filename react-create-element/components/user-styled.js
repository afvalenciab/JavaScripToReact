import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

const UserStyled = styled.div`
    background-image: linear-gradient(
    to bottom,
    ${({ primaryColor }) => primaryColor } 0%,
    ${({ primaryColor }) => primaryColor } 130px,
    ${({ tertiaryColor }) => tertiaryColor } 130px,
    ${({ tertiaryColor }) => tertiaryColor } 131px,
    ${({ secondaryColor }) => secondaryColor } 131px,
    ${({ secondaryColor }) => secondaryColor } 100%
  );
  color: ${({ fontColor }) => fontColor};
  text-align: center;
  overflow: hidden;
  padding: 20px;
  font-family: system-ui;
  border-radius: 0.3rem;
  box-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
  cursor: pointer;
  user-select: none;
`;

const AvatarStyled = styled.img`
  max-width: 150px;
  border-radius: 50%;
  border: 5px solid white;
  box-shadow: 0 0 2px black;
`;

const theme = {
  light: {
    primaryColor: '#f9f9f9',
    secondaryColor: 'white',
    tertiaryColor: 'rgba(0,0,0,.15)',
    fontColor: 'black',
  },
  dark: {
    primaryColor: '#212429',
    secondaryColor: '#212429',
    tertiaryColor: 'white',
    fontColor: 'white',
  }
}

class User extends Component {
  state = {
    mode: 'light'
  };

  setMode = (event) => {
    this.setState({ mode: event.matches ? 'dark' : 'light' });
  };

  componentDidMount(){
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    this.setMode(mediaQuery);
    mediaQuery.addEventListener('change', this.setMode);
  }

  render() {
    const { mode } = this.state;
    const { name, avatar } = this.props;

    return UserStyled(
      { ...theme[mode] },
      AvatarStyled(
        { src: avatar, alt: '' }
      ),
      createElement('h2', null, name)
    );
  }
}

export default User;
