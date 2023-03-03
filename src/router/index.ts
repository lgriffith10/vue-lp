import { HomeView, SearchView } from '../views';

export const routes = [
    {
        path: '/',
        name: 'front_home_index',
        component: HomeView,
    },
    {
        path: '/search',
        name: 'front_search_index',
        component: SearchView,
    }
]