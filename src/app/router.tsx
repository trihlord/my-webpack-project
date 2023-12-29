import { Path } from '@/constants/path'
import Home from '@/routes/Home'
import Root from '@/routes/Root'
import { createBrowserRouter } from 'react-router-dom'

export const router = createBrowserRouter([
    {
        children: [
            {
                element: <Home />,
                path: Path.HOME,
            },
        ],
        element: <Root />,
    },
])
