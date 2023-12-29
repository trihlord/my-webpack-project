import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'

import { api } from './services/api'

export function setupStore() {
    const store = configureStore({
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware),
        reducer: {
            [api.reducerPath]: api.reducer,
        },
    })
    setupListeners(store.dispatch)
    return store
}

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
export type RootState = ReturnType<AppStore['getState']>
