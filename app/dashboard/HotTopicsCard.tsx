import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

type Props = {};

const HotTopicsCard = (props: Props) => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Hot Topics</CardTitle>
        <CardDescription>
          <p>Click on a topic to start a quiz!</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="pl-2">Word Cloud</CardContent>
    </Card>
  );
};

export default HotTopicsCard;
