import { Provider } from 'react-redux'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { setupStore } from './app/store'
import Home from './components/Home'
import Root from './components/Root'
import { Path } from './constants/path'

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: Path.HOME,
                element: <Home />,
            },
        ],
    },
])

const store = setupStore()

function App() {
    return (
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    )
}

export default App
