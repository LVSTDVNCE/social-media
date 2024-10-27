import React from 'react'
import { Card, Typography, Avatar, Space } from 'antd'
import { UserOutlined } from '@ant-design/icons'

interface FeedItemProps {
	title: string
	content: string
}

const FeedItem: React.FC<FeedItemProps> = ({ title, content }) => (
	<Card
		style={{
			marginBottom: '16px',
			borderRadius: '8px',
			boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
		}}
	>
		<Space align='start'>
			<Avatar size={40} icon={<UserOutlined />} />
			<div>
				<Typography.Title level={5} style={{ margin: 0 }}>
					{title}
				</Typography.Title>
				<Typography.Paragraph style={{ marginTop: '8px' }}>
					{content}
				</Typography.Paragraph>
			</div>
		</Space>
	</Card>
)

export default FeedItem
