'use client';

import { useTheme } from 'next-themes';
import React from 'react';
import D3WorldCloud from 'react-d3-cloud';

type Props = {};

const wordCloud = [
	{ text: 'Hey', value: 1000 },
	{ text: 'lol', value: 200 },
	{ text: 'first impression', value: 800 },
	{ text: 'very cool', value: 1000000 },
	{ text: 'duck', value: 10 },
	{ text: 'trojan', value: 10000 },
	{ text: 'poggers', value: 100000 },
	{ text: 'pog', value: 100000 },
	{ text: 'pogchamp', value: 100000 },
];

const fontSizeMapper = (word: {value: number}) => Math.log2(word.value) * 5 + 16;

function CustomWordCloud(props: Props) {
  const theme = useTheme();
  return (
    <>
      <D3WorldCloud data={wordCloud} height={550} font={'Times'} fontSize={fontSizeMapper} rotate={0} padding={10} fill={theme.theme == 'dark' ? 'white' : 'black'} />
    </>
  );
}

export default CustomWordCloud;
