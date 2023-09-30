import webpackLogo from '@/assets/webpack.png'
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.container}>
            <h1 className={classes.heading}>Welcome to your Typescript React App!</h1>
            <img src={webpackLogo} alt="webpack logo" />
        </div>
    )
}

export default Home
