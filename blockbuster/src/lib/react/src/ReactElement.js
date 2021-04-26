import { render } from '../../react-dom.js';

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach(child => render(child, container));
  }

  return render(children, container);
}

function setEvents(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element){
  //event support
  if (prop.startsWith('on')) {
    const event = prop.replace('on','').toLowerCase();
    return setEvents(element, event, value);
  }

  //attribute support
  const attribute = value;
  return element.setAttribute(prop, attribute);
}

export function createElement(type, props, ...children) {
  console.log(children);

  const element = document.createElement(type);

  props && Object.keys(props).forEach(prop => setProperties(prop, props[prop], element));

  children.forEach(child => renderChildren(child, element));

  return element;
}
