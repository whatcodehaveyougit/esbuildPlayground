import * as React from 'react'
import * as Server from 'react-dom/server'

let Hello = () => <h1>Hello Worold</h1>

// Here we are using Server Side Rendering
console.log(Server.renderToString(<Hello />))