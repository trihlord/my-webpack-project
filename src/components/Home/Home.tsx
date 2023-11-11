import Result from '@/components/Result'
import Toolbar from '@/components/Toolbar'
import { Text } from '@/lib/Text'
import { HelpOutline } from '@/lib/icons'

function Home() {
    return (
        <>
            <Text typography={'headline-l'} weight={'bold'} as={'h1'}>
                Home Page
            </Text>
            <Toolbar size={'m'} view={'default'} />
            <Result
                iconType={HelpOutline}
                headline={'No Items'}
                subheader={'No items still exist. Please create a new item first.'}
            />
        </>
    )
}

export default Home
