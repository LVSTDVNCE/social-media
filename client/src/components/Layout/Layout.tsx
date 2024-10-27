import React from 'react'
import Header from './Header/Header'
import SideBar from './SideBar/SideBar'
import { Outlet } from 'react-router-dom'
import styles from './Layout.module.sass'

const Layout: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.layoutWrapper}>
				<SideBar />
				<Outlet />
			</div>
		</>
	)
}

export default Layout
