import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Journey from './journey.jsx'

const AnotherElement = (
  <a href='https://google.com' target='_blank' >visit Google</a>
)

// const ReactElement = {
//   type: 'a',
//   props: {
//     href: 'https://google.com',
//     target: '_blank',
//   },
//   children: 'Click me to visit Google',
// }; 

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'click me'
)

ReactDOM.createRoot(document.getElementById('root')).render
(
 ReactElement
)

