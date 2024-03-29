import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'

import { router } from './app/router'
import { setupStore } from './app/store'

const store = setupStore()

export function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}
