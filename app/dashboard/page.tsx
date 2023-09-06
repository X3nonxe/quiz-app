// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
import React from 'react'
import { getAuthSession } from '../lib/next-auth';
import { redirect } from 'next/navigation';
import QuizMeCard from '../components/dashboard/quizmecard';
import HistoryCard from '../components/dashboard/historycard';
import HotTopicsCard from './HotTopicsCard';
import RecentActivities from './RecentActivities';

type Props = {}

export const metadata = {
  title: "Dashboard | Quizqu",
  description: "Dashboard",
  url: "/dashboard",
  image: "/images/og.png",
  twitterCard: "summary_large_image",
}

const Dashboard = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    // If the user is not signed in, redirect to the homepage
    redirect("/");
  }

  return (
    <main className='p-8 mx-auto max-w-7xl'>
      <div className="flex items-center">
        <h2 className="mr-2 text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2">
        <QuizMeCard />
        <HistoryCard />
      </div>
      <div className="grid gap-4 mt-4 md:grid-cols-2 lg:grid-cols-7">
        <HotTopicsCard />
        <RecentActivities />
      </div>
    </main>
  )
}

export default Dashboard