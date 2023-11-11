import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root() {
    return (
        <div className={styles.root}>
            <div className={styles.page}>
                <Outlet />
            </div>
        </div>
    )
}

export default Root
