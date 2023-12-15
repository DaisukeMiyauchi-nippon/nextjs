"use client"
import Head from "next/head";
import { supabase } from "@/utils/supabaseClient";
import { useState } from "react";

export default function SignUp(){

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [passwordConf, setPasswordConf] = useState("")

  const onSubmit = async() => {
       // 画面の更新を制御
    try{
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      })
    alert('登録完了メールを確認してください');
    }catch(error){
      alert('エラーが発生しました');
    }
  };

  return (
    <div className="bg-white px-2 py-12 sm:py-16 lg:px-4">
    <div className="mx-auto max-w-2xl text-center">
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        利用登録
      </h2>
    </div>
    <div>
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            メールアドレス
          </label>
          <div className="mt-2">
            <input
              type="email"
              autoComplete="email"
              required value={email}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              パスワード
            </label>
          </div>
          <div className="mt-2">
            <input
              type="password"
              autoComplete="current-password"
              required value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              パスワード確認
            </label>
        <div className="mt-2">
            <input
              type="password"
              autoComplete="current-password"
              required value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>

        <div>
          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            // 登録ボタンがクリックされたとき関数が実行されるようにする
            onClick={() => {
              onSubmit();
            }}
          >
            登録
          </button>
        </div>
        </form>
    </div>
    </div>
    </div>
  )
}

