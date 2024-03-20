import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/main/HomeView.vue'

import ViewGameView from '@/views/main/ViewGameView.vue'
import AboutView from '@/views/main/AboutView.vue'
import NewGameView from '@/views/admin/NewGameView.vue'
import DashboardView from '@/views/admin/DashboardView.vue'
import ContentManagementView from '@/views/admin/ContentManagementView.vue'
import SiteSettingsView from '@/views/admin/SiteSettingsView.vue'
import OurGames from '@/views/main/OurGames.vue'

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
		component: AboutView
    },
	{
		path: '/games',
		name: 'games',
		component: OurGames,
    },
	{
		path: '/view-game',
		name: 'view-game',
		component: ViewGameView,
    },
    {
		path: '/admin',
		children: [
			{
				path: '',
				name: 'Overview',
				component: DashboardView,
			},
			{
				path: 'add-game',
				name: 'Add Game',
				component: NewGameView,
			},
		]
    },
	{
		path: '/admin/content-management',
		name: 'Content Management',
		component: ContentManagementView,
		children: [
		]
    },
	{
		path: '/admin/site-settings',
		name: 'Site Settings',
		component: SiteSettingsView,
		children: [
		]
    },
	
  ]
})

export default router
