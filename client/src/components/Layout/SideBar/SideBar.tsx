// SideBar.tsx
import React from 'react'
import { Menu } from 'antd'
import {
	FileAddOutlined,
	FileSearchOutlined,
	HomeOutlined,
	MessageOutlined,
	UserOutlined,
} from '@ant-design/icons'
import { Link, useLocation } from 'react-router-dom'

const { Item } = Menu

// Стили для боковой панели
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
			<Item key='/UserProfile' icon={<UserOutlined />}>
				<Link to='/UserProfile'>Профиль</Link>
			</Item>
			<Item key='/' icon={<HomeOutlined />}>
				<Link to='/'>Новости</Link>
			</Item>
			<Item key='/Messenger' icon={<MessageOutlined />}>
				<Link to='/Messenger'>Мессенджер</Link>
			</Item>
			<Item key='/NewPost' icon={<FileAddOutlined />}>
				<Link to='/NewPost'>Создать пост</Link>
			</Item>
			<Item key='/SearchPage' icon={<FileSearchOutlined />}>
				<Link to='/SearchPage'>Поиск постов</Link>
			</Item>
		</Menu>
	)
}

export default SideBar
