import React from 'react'
import ReactDOM from 'react-dom'

function App() {
    return (
        <div id='wrapper'>
            <h1 style={{color:'blue'}}>Hello World</h1>
        </div>
    )
}

// Render component App vào #root element
ReactDOM.render(<App />, document.getElementById('root'))