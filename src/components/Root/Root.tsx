import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root() {
    return (
        <div className={styles.root}>
            <main className={styles.page}>
                <Outlet />
            </main>
        </div>
    )
}

export default Root
