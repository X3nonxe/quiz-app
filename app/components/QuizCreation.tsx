'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useForm } from 'react-hook-form';
import { quizCreationSchema } from '@/schemas/form/quiz';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from './ui/form';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { BookOpen, CopyCheck } from 'lucide-react';
import { Separator } from './ui/separator';

type Props = {};

type Input = z.infer<typeof quizCreationSchema>;

export const metadata = {
  title: 'Quiz | Quizqu',
  description: 'QuizPage',
};

const QuizCreation = (props: Props) => {
  const form = useForm<Input>({
    resolver: zodResolver(quizCreationSchema),
    defaultValues: {
      type: 'open_ended',
      amount: 0,
      topic: '',
    },
  });

  const onSubmit = (data: Input) => {
    alert(JSON.stringify(data, null, 2));
  };

	form.watch()

  return (
    <div className="grid h-screen place-items-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Quiz Creation</CardTitle>
          <CardDescription>chose a topic</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="topic"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Topic</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a topic..." {...field} />
                    </FormControl>
                    <FormDescription>Please provide a topic.</FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Number of Questions</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter an amount..."
                        {...field}
                        type="number"
                        min={1}
                        max={10}
                        onChange={(e) => {
                          form.setValue('amount', parseInt(e.target.value));
                        }}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex justify-between">
                <Button
                  type="button"
                  onClick={() => {
                    form.setValue('type', 'mcq');
                  }}
                  className="w-1/2 rounded-none rounded-l-lg"
                  variant={form.getValues('type') === 'mcq' ? 'default' : 'secondary'}
                >
                  <CopyCheck className="w-4 h-4 mr-2" />
                  Multiple Choice
                </Button>
                <Separator orientation="vertical" />
                <Button
                  type="button"
                  onClick={() => {
                    form.setValue('type', 'open_ended');
                  }}
                  className="w-1/2 rounded-none rounded-r-lg"
                  variant={form.getValues('type') === 'open_ended' ? 'default' : 'secondary'}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Open Ended
                </Button>
              </div>
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuizCreation;
