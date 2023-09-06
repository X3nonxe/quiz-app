import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'

type Props = {}

const RecentActivities = (props: Props) => {
	return (
		<Card className="col-span-4 lg:col-span-3">
			<CardHeader>
				<CardTitle className="text-2xl font-bold">Recent Activities</CardTitle>
				<CardDescription>
					<p>You have played a total of 7 games</p>
				</CardDescription>
			</CardHeader>
			<CardContent className="max-h-[580px] overflow-scroll">histories</CardContent>
		</Card>
	)
}

export default RecentActivities