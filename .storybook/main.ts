import type { StorybookConfig } from '@storybook/react-webpack5'
import path from 'node:path'

const config: StorybookConfig = {
    stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
    addons: [
        '@storybook/addon-links',
        '@storybook/addon-essentials',
        '@storybook/addon-onboarding',
        '@storybook/addon-interactions',
    ],
    framework: {
        name: '@storybook/react-webpack5',
        options: {},
    },
    docs: {
        autodocs: 'tag',
    },
    webpackFinal: (config) => {
        const resolve = config.resolve
        const alias = resolve ? resolve.alias : {}

        return {
            ...config,
            resolve: {
                ...resolve,
                alias: {
                    ...alias,
                    '@': path.resolve(__dirname, '../src/'),
                },
            },
        }
    },
}

export default config
