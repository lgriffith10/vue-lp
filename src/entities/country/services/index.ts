import { api } from '@/services';

export const getCountries = (): Promise<any> =>
    api.get('/all')