import { Outlet } from 'react-router-dom'
import styles from './Root.module.css'

function Root() {
    return (
        <>
            <header className={styles.header}></header>
            <main className={styles.main}>
                <Outlet />
            </main>
        </>
    )
}

export default Root
