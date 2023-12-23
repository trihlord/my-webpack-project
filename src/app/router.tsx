import { Path } from '@/constants/path'
import Home from '@/routes/Home'
import Root from '@/routes/Root'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
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
