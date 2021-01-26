import { render } from './lib/react-dom.js';
import App from './components/App.js';


const container = document.getElementById('root');

render(new App(), container);