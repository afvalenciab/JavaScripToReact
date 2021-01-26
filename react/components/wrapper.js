import { render } from '../lib/react-dom.js';
import { Component } from '../lib/react.js';

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return `
      <div class="wrapper">
       ${children}
      </div>
    `;
  };
}

export default Wrapper;
