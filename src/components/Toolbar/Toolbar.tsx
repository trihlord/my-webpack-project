import type { IButtonProps } from '@/lib/Button'
import type { ITextinputProps } from '@/lib/Textinput'
import type { PlusProps, SearchProps } from '@/lib/icons'

import { Button } from '@/lib/Button'
import { Textinput } from '@/lib/Textinput'
import { Plus, Search } from '@/lib/icons'
import { provideIcon } from '@/lib/provideIcon'
import { useTranslation } from 'react-i18next'

import styles from './Toolbar.module.css'

type ToolbarSize = NonNullable<IButtonProps['size'] & ITextinputProps['size']>
type IconSize = NonNullable<PlusProps['size'] & SearchProps['size']>
type ToolbarView = NonNullable<IButtonProps['view'] & ITextinputProps['view']>

function getIconSize(toolbarSize: ToolbarSize | undefined) {
    const defaultIconSize = 24
    const iconSizes: Record<ToolbarSize, IconSize> = {
        m: 16,
        s: 12,
    }
    const size = toolbarSize ? iconSizes[toolbarSize] : defaultIconSize
    return { size }
}

interface ToolbarProps {
    size?: ToolbarSize
    view?: ToolbarView
}

function Toolbar({ size, view }: ToolbarProps) {
    const { t } = useTranslation()
    const iconSize = getIconSize(size)
    return (
        <div className={styles.toolbar}>
            <Button iconLeft={provideIcon(Plus, iconSize)} size={size} view={view}>
                {t`Add Item`}
            </Button>
            <Textinput
                className={styles.search}
                iconLeft={provideIcon(Search, iconSize)(styles.icon)}
                inputMode={'search'}
                placeholder={t`Search Item`}
                size={size}
                view={view}
            />
        </div>
    )
}

export default Toolbar
