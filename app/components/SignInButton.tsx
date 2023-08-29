'use client'

import React from 'react'
import { Button } from './ui/button'
import { signIn } from 'next-auth/react'
import { getAuthSession } from '../lib/next-auth'

type Props = {
	text: string
}

function SigninButton({text}: Props) {
	return (
		<Button onClick={() => {
			signIn('google').catch(console.error)
		}}>{text}</Button>
	)
}

export default SigninButton