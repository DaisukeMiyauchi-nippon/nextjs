//新バージョンのサーバーコンポーネントからcookieを取得しようとする
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { cookies } from "next/headers";;
import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'

export default function Home() {
  const session = cookies();
  const signOut = async () => {
    'use server'
    const cookieStore = cookies()
    const supabase = createClient(cookieStore)
    await supabase.auth.signOut()
    return redirect('/')
  }

  return (
    <div>
      {!session && (
        <div>
          <Link href="/signinnn">
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              サインイン２
            </button>
          </Link>

          <Link href="/signup">
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              利用登録
            </button>
          </Link>
        </div>
      )}
      {session && (
         <form action={signOut}>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          サインアウト２
        </button>
        </form>
      )}
    </div>
  );
}
