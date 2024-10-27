import React, { useEffect, useState, useCallback } from 'react'
import { Row, Col, Typography, Spin } from 'antd'
import FeedItem from '../../components/FeedItem/FeedItem'

interface IFeedItem {
	id: number
	title: string
	body: string
}

const NewsFeed: React.FC = () => {
	const [feedItems, setFeedItems] = useState<IFeedItem[]>([])
	const [loading, setLoading] = useState<boolean>(false)
	const [page, setPage] = useState<number>(1)
	const [hasMore, setHasMore] = useState<boolean>(true)

	const fetchFeedItems = useCallback((currentPage: number) => {
		setLoading(true)
		fetch(
			`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=10`
		)
			.then(response => response.json())
			.then(json => {
				setFeedItems(prevItems => [...prevItems, ...json])
				if (json.length < 10) setHasMore(false)
			})
			.finally(() => setLoading(false))
	}, [])

	useEffect(() => {
		fetchFeedItems(page)
	}, [fetchFeedItems, page])

	const handleScroll = useCallback(() => {
		if (
			window.innerHeight + window.scrollY >=
				document.documentElement.scrollHeight - 100 &&
			!loading &&
			hasMore
		) {
			setPage(prevPage => prevPage + 1)
		}
	}, [loading, hasMore])

	useEffect(() => {
		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [handleScroll])

	return (
		<div
			style={{
				padding: '20px',
				backgroundColor: '#f0f2f5',
				height: '100vh',
				marginTop: '-64px',
				paddingTop: '84px',
				overflowY: 'auto',
			}}
		>
			<Row style={{ marginLeft: '120px' }}>
				<Col xs={22} sm={20} md={16} lg={12} xl={10}>
					<Typography.Title
						level={2}
						style={{ textAlign: 'center', marginBottom: '20px' }}
					>
						Новости
					</Typography.Title>
					{feedItems.map(news => (
						<FeedItem key={news.id} title={news.title} content={news.body} />
					))}
					{loading && (
						<div
							style={{
								textAlign: 'center',
								marginTop: '20px',
								width: '100vh',
							}}
						>
							<Spin size='large' tip='Загрузка новостей...' />
						</div>
					)}
					{!hasMore && !loading && (
						<Typography.Text
							style={{
								display: 'block',
								textAlign: 'center',
								marginTop: '20px',
							}}
						>
							Нет больше новостей
						</Typography.Text>
					)}
				</Col>
			</Row>
		</div>
	)
}

export default NewsFeed
