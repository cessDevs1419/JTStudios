import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

import AboutView from '@/views/main/AboutView.vue'
import NewGameView from '@/views/admin/NewGameView.vue'
import AdminRoutingView from '@/views/admin/AdminRoutingView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
		path: '/',
		name: 'home',
		component: HomeView
    },
    {
		path: '/about',
		name: 'about',
		components: AboutView
    },
    {
		path: '/admin',
		component: AdminRoutingView,
		children: [
			{
				path: '',
				component: DashboardView,
			},
			{
				path: '/add-game',
				component: NewGameView,
			}
		]
    }
  ]
})

export default router
