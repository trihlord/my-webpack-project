import Home from '@/components/Home'
import Root from '@/components/Root'
import { Path } from '@/constants/path'
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
