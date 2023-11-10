import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root() {
    return (
        <div className={styles.page}>
            <div className={styles.main}>
                <Outlet />
            </div>
        </div>
    )
}

export default Root
