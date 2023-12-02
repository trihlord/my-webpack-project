import { Path } from '@/constants/path'
import { HttpResponse, http } from 'msw'

export const handlers = [http.get(Path.API, () => HttpResponse.text('ok'))]
