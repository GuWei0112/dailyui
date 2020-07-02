import React from 'react'
import ReactDOM from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import Drawer from './page/Drawer/drawer.components'

const App = () => {
    return (
        <BrowserRouter>
            <Drawer />
        </BrowserRouter>
    )
}

export default ReactDOM.render(<App/>,document.getElementById('root'))