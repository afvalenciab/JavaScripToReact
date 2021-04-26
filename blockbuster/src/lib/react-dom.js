
function render(element, container) {
  console.log(typeof element);
  if (typeof element === 'string' || element instanceof Element || typeof element === 'number' ) {
    return container.append(element);
  }

  function reRender(newChild) {
    container.replaceChild(newChild, childElement);
    childElement = newChild;
  }

  element.update = reRender;

  let childElement = element.build();
  container.append(childElement);

  element.componentDidMount();
}

export { render };