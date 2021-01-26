import { render } from '../../react-dom.js';

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container));
  }

  return render(children, container);
}

function setProperties(prop, value, element){
  const attribute = value;

  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, ...children) {
  const element = document.createElement(type);

  props && Object.keys(props).forEach(prop => setProperties(prop, props[prop], element));

  children.forEach(child => renderChildren(child, element));

  return element;
}
