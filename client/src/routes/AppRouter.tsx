import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from '../components/Layout/Layout'
import { routesArray } from './Routes'
import Login from '../pages/Login/Login'

const AppRouter = () => {
	const isAuth = true
	const routeComponents = routesArray.map(({ path, component }) => (
		<Route path={path} element={component} key={path} />
	))

	return (
		<Routes>
			{isAuth ? (
				<Route path='/' element={<Layout />}>
					{routeComponents}
				</Route>
			) : (
				<>
					<Route path='auth' element={<Login />} />
					<Route path='*' element={<Navigate to='/auth' />} />
				</>
			)}
		</Routes>
	)
}

export default AppRouter
