import { Path } from '@/constants/path'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: Path.API }),
    endpoints: () => ({}),
})
