import Chat from '../pages/Chat/Chat'
import Feed from '../pages/Feed/Feed'
import Messenger from '../pages/Messenger/Messenger'
import NewPost from '../pages/NewPost/NewPost'
import NotFound from '../pages/NotFound/NotFound'
import SearchPage from '../pages/SearchPage/SearchPage'
import UserProfile from '../pages/UserProfile/UserProfile'
import { IRoutes } from '../types/Types'

export const routesArray: IRoutes[] = [
	{
		path: '/',
		component: <Feed />,
	},
	{
		path: 'Messenger',
		component: <Messenger />,
	},
	{
		path: 'Chat',
		component: <Chat />,
	},
	{
		path: 'NewPost',
		component: <NewPost />,
	},
	{
		path: 'SearchPage',
		component: <SearchPage />,
	},
	{
		path: 'UserProfile',
		component: <UserProfile />,
	},
	{
		path: '*',
		component: <NotFound />,
	},
]
