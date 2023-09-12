import { NextResponse } from 'next/server';
import { quizCreationSchema } from '@/schemas/form/quiz';
import { ZodError } from 'zod';
import { strict_output } from '@/app/lib/gpt';

export const POST = async (req: Request, res: Response) => {
  try {
    const body = await req.json();
    const { amount, topic, type } = quizCreationSchema.parse(body);
    let questions: any;

    if (type === 'open_ended') {
      questions = await strict_output('Ypu are to create 5 multiple choice questions on the topic of history.', `You are to create ${amount} multiple choice questions on the topic of ${topic}.`, {
        question: 'Question',
        answer: 'answer with max length of 15 words',
      });
    }

    return NextResponse.json(
      {
        questions,
      },
      { status: 200 }
    );
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json(
        {
          error: error.issues.map((issue) => issue.message),
        },
        { status: 400 }
      );
    }
		if (error instanceof Error) {
			return NextResponse.json(
				{
					error: error.message,
				},
				{ status: 400 }
			);
		}
  }
};
