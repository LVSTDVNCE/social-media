import React from 'react'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { menu } from './dataSideBar'

const { Item } = Menu

const sidebarStyles: React.CSSProperties = {
	marginLeft: 180,
	width: 200,
	marginTop: -64,
	paddingTop: 64,
	height: '100vh',
	backgroundColor: '#f0f2f5',
	borderRight: '1px solid #d9d9d9',
	overflow: 'hidden',
}

const SideBar: React.FC = () => {
	const location = useLocation()

	return (
		<Menu
			mode='inline'
			selectedKeys={[location.pathname]}
			style={sidebarStyles}
			defaultSelectedKeys={['/']}
		>
			{menu.map(item => (
				<Item
					key={item.link}
					icon={item.icon ? React.createElement(item.icon) : null}
				>
					<Link to={item.link}>{item.title}</Link>
				</Item>
			))}
		</Menu>
	)
}

export default SideBar
