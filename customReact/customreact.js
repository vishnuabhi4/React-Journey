function customRender(reactElement, container) {
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target',reactElement.props.target);
    // container.appendChild(domElement)
    
    const domElement = document.createElement(reactElement.type)
    /*The reactElement.type is expected to be a string representing the HTML tag name, such as "div", "a", "p", etc.
    document.createElement() method creates the HTML element specified by tagName, 
    or an HTMLUnknownElement if tagName isn't recognized.
    createElement(tagName)
    createElement(tagName, options)
    */
    domElement.innerHTML= reactElement.children
    // it will return like this = <a href="https://google.com" target="_blank">Click me to visit Google(it is the child of a tag)</a>
    for (const i in reactElement.props) {
      console.log(i);
      // if(i === 'children') continue;
      //By excluding children from the attributes, you ensure that it is treated as the inner content 
      //of the element rather than an HTML attribute.
      domElement.setAttribute(i, reactElement.props[i])
      // domElement.setAttribute(name, value)
    }
    container.appendChild(domElement);
    // mainContainer.appendChild(domElement);
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
