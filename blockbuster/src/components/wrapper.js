import { Component } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

const WrapperStyled = styled.div`
  max-width: 1280px;
  margin: auto;
`;

class Wrapper extends Component {
  render() {
    const { children } = this.props;

    return WrapperStyled(null, children);
  }
}

export default Wrapper;
