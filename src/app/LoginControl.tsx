'use client'

import { signIn, signOut } from "next-auth/react"
import { useSession } from 'next-auth/react'

export default function Home() {
  const { data: session } = useSession()

  return (
      <div>
        {!session && (
          <div>
          <button
            onClick={() => signIn()}
            className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4'
          >
            サインイン
          </button>

          <button
            onClick={() => signIn()}
            className='bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            利用登録
          </button>
          </div>
        )}
        {session && (
          <button
            onClick={() => signOut()}
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
          >
            サインアウト
          </button>
        )}
        </div>
  )
        }