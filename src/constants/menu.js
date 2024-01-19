import { v4 } from 'uuid';

export const MENU_ITEMS = [
	{
		id: v4(),
		name: 'HOME',
		route: '/'
	},
	{
		id: v4(),
		name: 'WORKS',
		route: '/works'
	},
	{
		id: v4(),
		name: 'ABOUT',
		route: '/about'
	}
];
