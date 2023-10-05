import webpackLogo from '@/assets/webpack.png'
import { Button } from '@/lib/Button'
import { Text } from '@/lib/Text'
import classes from './Home.module.css'

function Home() {
    return (
        <div className={classes.container}>
            <Text typography="headline-xl" weight="light">
                Welcome to your Typescript React App!
            </Text>
            <img src={webpackLogo} alt="webpack logo" />
            <Button view="default" size="m">
                Click me
            </Button>
        </div>
    )
}

export default Home
