import Result from '@/components/Result'
import Toolbar from '@/components/Toolbar'
import { Text } from '@/lib/Text'

function Home() {
    return (
        <>
            <Text typography={'headline-l'} weight={'bold'} as={'h1'}>
                Home Page
            </Text>
            <Toolbar size={'m'} view={'default'} />
            <Result />
        </>
    )
}

export default Home
