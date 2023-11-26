import { StrictMode, Suspense } from 'react'
import { render } from 'react-dom'
import App from './App'

import './lib/i18n'
import './lib/theme'
import './styles/index.css'

const container = document.getElementById('root')
render(
    <StrictMode>
        <Suspense fallback={null}>
            <App />
        </Suspense>
    </StrictMode>,
    container
)
