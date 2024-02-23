import { Card } from '@/components/Card'
import { Toolbar } from '@/components/Toolbar'
import { Button } from '@/lib/Button'
import { Text } from '@/lib/Text'
import { HelpOutline } from '@/lib/icons'
import { useTranslation } from 'react-i18next'

export function Home() {
    const { t } = useTranslation()
    return (
        <>
            <Text as={'h1'} typography={'headline-l'} weight={'bold'}>
                {t`Home Page`}
            </Text>
            <Toolbar size={'m'} view={'default'} />
            <Card
                headline={t`No Items`}
                iconType={HelpOutline}
                subheader={t`No items still exist. Please create a new item first.`}
            >
                <Button size={'m'} view={'default'}>
                    {t`Add Item`}
                </Button>
            </Card>
        </>
    )
}
