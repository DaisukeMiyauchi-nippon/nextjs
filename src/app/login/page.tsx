import React from 'react'
import { getServerSession } from 'next-auth';
import { LoginButton } from '../compornents/LoginButton';
import { LogoutButton } from '../compornents/LoginButton';
import { authOptions } from '../option';
import { redirect } from 'next/navigation';


const page = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    redirect('/sign_in')
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
    <div>Welcome: {session?.user?.name}</div>
    <LogoutButton/>
  </main>
  )
}
}

export default page