import { Component, createElement } from '../lib/react/index.js';
import styled from '../lib/styled-components.js';

import Wrapper from './wrapper.js';

class Actions extends Component {
  render(){
    const { children } = this.props;

    return Wrapper(null, createElement('div', { class: 'actions' }, children) );
  }
}

export default Actions;