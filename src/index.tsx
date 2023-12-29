import { StrictMode, Suspense } from 'react'
import { render } from 'react-dom'

import App from './App'
import { NodeEnv } from './constants/nodeEnv'
import { Path } from './constants/path'
import './lib/i18n'
import './lib/theme'
import './styles/index.css'

if (process.env.NODE_ENV === NodeEnv.DEVELOPMENT) {
    const { worker } = await import('./mocks/browser')
    worker.start({
        serviceWorker: {
            options: {
                scope: Path.API,
            },
        },
    })
}

const container = document.getElementById('root')
render(
    <StrictMode>
        <Suspense fallback={null}>
            <App />
        </Suspense>
    </StrictMode>,
    container
)
