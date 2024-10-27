import React from 'react'
import { Layout, Input, Avatar, Badge, Menu, Dropdown } from 'antd'
import { BellOutlined, UserOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'

const { Header: AntHeader } = Layout
const { Search } = Input

const headerStyles: React.CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	padding: '0 207px',
	backgroundColor: '#3b5998',
	position: 'relative',
	zIndex: 1,
}

const logoStyles: React.CSSProperties = {
	fontSize: 24,
	color: '#fff',
	fontWeight: 'bold',
}

const iconStyles: React.CSSProperties = {
	fontSize: 20,
	color: '#fff',
	marginLeft: 20,
	cursor: 'pointer',
}

const Header: React.FC = () => {
	const profileMenu = (
		<Menu>
			<Menu.Item key='0'>
				<Link to='/UserProfile'>Мой профиль</Link>
			</Menu.Item>
			<Menu.Item key='1'>
				<Link to='/'>Настройки</Link>
			</Menu.Item>
			<Menu.Divider />
			<Menu.Item key='2'>Выйти</Menu.Item>
		</Menu>
	)

	return (
		<AntHeader style={headerStyles}>
			<div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
				<Link to='/' style={logoStyles}>
					SGU
				</Link>
				<Search placeholder='Поиск' allowClear style={{ maxWidth: 400 }} />
			</div>

			<div style={{ display: 'flex', alignItems: 'center' }}>
				<Badge>
					<BellOutlined style={iconStyles} />
				</Badge>

				<Dropdown overlay={profileMenu} trigger={['click']}>
					<Avatar
						style={{ marginLeft: 20, cursor: 'pointer' }}
						icon={<UserOutlined />}
					/>
				</Dropdown>
			</div>
		</AntHeader>
	)
}

export default Header
