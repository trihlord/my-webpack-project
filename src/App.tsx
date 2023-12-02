import { RouterProvider, createBrowserRouter } from 'react-router-dom'
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

function App() {
    return <RouterProvider router={router} />
}

export default App
