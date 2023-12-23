import { type Meta, type StoryObj } from '@storybook/react'
import Table from './Table'

export default {
    component: Table,
} satisfies Meta<typeof Table>

type Story = StoryObj<typeof Table>

export const Base: Story = {}
