import React from 'react'
import ReactDOM from 'react-dom'

const App2 = () =>
  <div>
    <h3>Hello ESBuild World</h3>

    <i>npm build = node browser-builder.js</i>
    <p>We are using the browser-builder file to generate our dist code, which can be served up to a web browser, voila.</p>
    <br></br>

    <i>npm start = node -r esbuild-register index.ts</i>
    <p>In the index.ts file we have created a simple express server which serves up whatever is in the public folder</p>

    <p>Hot Reloading is working with nodemon.</p>
  </div>

ReactDOM.render(<App2 />, document.getElementById('root'))