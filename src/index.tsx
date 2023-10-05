import { StrictMode } from 'react'
import { render } from 'react-dom'
import App from './App'

import './lib/theme'
import './styles/index.css'

const container = document.getElementById('root')
render(
    <StrictMode>
        <App />
    </StrictMode>,
    container
)
