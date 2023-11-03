function customRender(reactElement, container){
    const domElement = document.createElementlement
    
    (reactElement.type)
    domElement.innerHtml = reactElement.children
    domElement.setAttribute('href', reactElement.props.href)
    
}

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'click me to visit google'
}

const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)