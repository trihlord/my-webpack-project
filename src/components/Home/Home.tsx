import Result from '@/components/Result'
import Toolbar from '@/components/Toolbar'
import { Button } from '@/lib/Button'
import { Text } from '@/lib/Text'
import { HelpOutline } from '@/lib/icons'
import { useTranslation } from 'react-i18next'

function Home() {
    const { t } = useTranslation()
    return (
        <>
            <Text typography={'headline-l'} weight={'bold'} as={'h1'}>
                {t`Home Page`}
            </Text>
            <Toolbar size={'m'} view={'default'} />
            <Result
                iconType={HelpOutline}
                headline={t`No Items`}
                subheader={t`No items still exist. Please create a new item first.`}
            >
                <Button size={'m'} view={'default'}>
                    {t`Add Item`}
                </Button>
            </Result>
        </>
    )
}

export default Home
