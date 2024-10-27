import * as Icons from '@ant-design/icons'

export const menu = [
	{
		title: 'Профиль',
		icon: Icons.UserOutlined,
		link: '/UserProfile/:id',
	},
	{
		title: 'Новости',
		icon: Icons.HomeOutlined,
		link: '/',
	},
	{
		title: 'Мессенджер',
		icon: Icons.MessageOutlined,
		link: '/Messenger',
	},
	{
		title: 'Друзья',
		icon: Icons.UsergroupAddOutlined,
		link: '/Friends',
	},
	{
		title: 'Создать пост',
		icon: Icons.FileAddOutlined,
		link: '/NewPost',
	},
	{
		title: 'Поиск постов',
		icon: Icons.FileSearchOutlined,
		link: '/SearchPage',
	},
]
