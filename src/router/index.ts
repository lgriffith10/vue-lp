import { Home, Details } from '../views';

export const routes = [
    {
        path: '/',
        name: 'front_home_index',
        component: Home,
    },
    {
        path: '/details',
        name: 'front_details_index',
        component: Details,
    }
]