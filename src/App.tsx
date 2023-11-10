import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './components/Home'
import Root from './components/Root'

const router = createBrowserRouter([
    {
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
        ],
    },
])

function App() {
    return <RouterProvider router={router} />
}

export default App
