"use client"
import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { cookies } from "next/headers";
import { supabase } from "@/utils/supabase/supabaseClient";

export default function Home() {
  const { data: session } = useSession()
  console.log(session)
  const Logout = async(e:any) => {
    e.preventDefault();
    try{
      const { error:logoutError } = await supabase.auth.signOut()
      if (logoutError) {
        throw logoutError;
      }
    }catch{
      alert('エラーが発生しました');
    }
  }
  return (
    <div>
      {!session && (
        <div>
          <Link href="/signinnn">
            <button className="bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-4">
              サインイン
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
      <form onSubmit={Logout}>
        <button
        type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          サインアウト
        </button>
        </form>

      )}
    </div>
  );
      }