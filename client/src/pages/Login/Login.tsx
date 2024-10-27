import React from 'react'
import { Form, Input, Button, Typography, Card } from 'antd'

const { Title } = Typography

const Login: React.FC = () => {
	const onFinish = (values: any) => {
		console.log('Success:', values)
	}

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo)
	}

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '100vh',
				backgroundColor: '#f0f2f5',
			}}
		>
			<Card
				style={{
					width: 300,
					padding: '20px',
					borderRadius: '8px',
					boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
				}}
			>
				<Title level={3} style={{ textAlign: 'center', marginBottom: '24px' }}>
					Login
				</Title>
				<Form
					name='login'
					initialValues={{ remember: true }}
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
					layout='vertical'
				>
					<Form.Item
						label='Имя пользователя'
						name='username'
						rules={[{ required: true, message: 'Пожалуйста введи ваше имя!' }]}
					>
						<Input placeholder='Enter your username' />
					</Form.Item>

					<Form.Item
						label='Пароль'
						name='password'
						rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
					>
						<Input.Password placeholder='Enter your password' />
					</Form.Item>

					<Form.Item>
						<Button type='primary' htmlType='submit' block>
							Log in
						</Button>
					</Form.Item>
				</Form>
			</Card>
		</div>
	)
}

export default Login
