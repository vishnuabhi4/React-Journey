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

const Anotheruser = "_TO_"

const ReactElement = React.createElement(
  'a',
  { href: 'https://google.com', target: '_blank'},
  'click me',
  Anotheruser,
  AnotherElement
)

ReactDOM.createRoot(document.getElementById('root')).render
(
 ReactElement
  
)

