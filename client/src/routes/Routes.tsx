import Chat from '../pages/Chat/Chat'
import Feed from '../pages/Feed/Feed'
import Messenger from '../pages/Messenger/Messenger'
import NewPost from '../pages/NewPost/NewPost'
import NotFound from '../pages/NotFound/NotFound'
import SearchPage from '../pages/SearchPage/SearchPage'
import UserProfile from '../pages/UserProfile/UserProfile'
import { IRoutes } from '../types/Types'
import Login from '../pages/Login/Login'
import Friends from '../pages/Friends/Friends'

export const routesArray: IRoutes[] = [
	{
		path: '/',
		component: <Feed />,
		auth: false,
	},
	{
		path: 'Messenger',
		component: <Messenger />,
		auth: true,
	},
	{
		path: 'Chat/:id',
		component: <Chat />,
		auth: true,
	},
	{
		path: 'NewPost',
		component: <NewPost />,
		auth: true,
	},
	{
		path: 'SearchPage',
		component: <SearchPage />,
		auth: false,
	},
	{
		path: 'UserProfile/:id',
		component: <UserProfile />,
		auth: true,
	},
	{
		path: '*',
		component: <NotFound />,
		auth: false,
	},
	{
		path: 'auth',
		component: <Login />,
		auth: true,
	},
	{
		path: 'Friends',
		component: <Friends />,
		auth: true,
	},
]
