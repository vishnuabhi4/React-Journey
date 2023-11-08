function customRender(reactElement, container) {
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement)
    
    const domElement = document.createElement(reactElement.type)
    //The reactElement.type is expected to be a string representing the HTML tag name, such as "div", "a", "p", etc.
    domElement.innerHTML= reactElement.children
    for (const i in reactElement.props) {
      if(i === 'children') continue;
      domElement.setAttribute(i, reactElement.props[i])
    }
    container.appendChild(domElement);
    //The container is represented by the mainContainer variable.
  }

  
  const reactElement = {
    type: 'a',
    props: {
      href: 'https://google.com',
      target: '_blank',
    },
    children: 'Click me to visit Google',
  };
  
  const mainContainer = document.querySelector('#root');
  
  customRender(reactElement, mainContainer);
  