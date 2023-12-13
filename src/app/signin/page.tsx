"use client"
import Head from "next/head";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";
import Link from 'next/link';
import { useRouter } from 'next/navigation'

export default function Login(){
    const router = useRouter()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

  const onLogin = async() => {
      const { data,error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      })}

  return (
    <div>
      <Head>
        <title>ログイン画面</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div>
          <form>
          <div>
            <label>メールアドレス</label>
            <input type="email"
              required value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>パスワード</label>
            <input type="password"
              required value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <div>
          <button
                style={{ width: 220 }}
                color="primary"
                // 登録ボタンがクリックされたとき関数が実行されるようにする
                onClick={()=>{onLogin();
                }}
              >ログイン</button>

            <Link href='/signup'>
              ユーザー登録がお済みでない方はこちらから
            </Link><br/>
            <Link href='/sendemail'>
              パスワードをお忘れの方はこちらから
            </Link>
          </div>
        </form>
        </div>
      </main>
    </div>
  )
}

