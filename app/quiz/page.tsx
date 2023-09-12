import React from 'react';
import { getAuthSession } from '../lib/next-auth';
import { redirect } from 'next/navigation';
import QuizCreation from '../components/QuizCreation';

type Props = {};

export const metadata = {
  title: 'Quiz | Quizqu',
  description: 'QuizPage',
};

const QuizPage = async (props: Props) => {
  const session = await getAuthSession();

  if (!session?.user) {
    redirect('/');
  }
  return <QuizCreation />;
};

export default QuizPage;
