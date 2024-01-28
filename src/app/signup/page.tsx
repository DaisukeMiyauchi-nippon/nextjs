"use client";
import Head from "next/head";
import { supabase } from "@/utils/supabase/supabaseClient";
import { useState } from "react";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConf, setPasswordConf] = useState("");
  const [name, setName] = useState("");;
  const [prefecture, setPrefecture] = useState("");

  const onSubmit = async () => {
    // 画面の更新を制御
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
      });
      alert("登録完了メールを確認してください");
    } catch (error) {
      alert("エラーが発生しました");
    }
  };

  const allPrefectures = [
    { code: '01', name: '北海道' },
    { code: '02', name: '青森県' },
    { code: '03', name: '岩手県' },
    { code: '04', name: '宮城県' },
    { code: '05', name: '秋田県' },
    { code: '06', name: '山形県' },
    { code: '07', name: '福島県' },
    { code: '08', name: '茨城県' },
    { code: '09', name: '栃木県' },
    { code: '10', name: '群馬県' },
    { code: '11', name: '埼玉県' },
    { code: '12', name: '千葉県' },
    { code: '13', name: '東京都' },
    { code: '14', name: '神奈川県' },
    { code: '15', name: '新潟県' },
    { code: '16', name: '富山県' },
    { code: '17', name: '石川県' },
    { code: '18', name: '福井県' },
    { code: '19', name: '山梨県' },
    { code: '20', name: '長野県' },
    { code: '21', name: '岐阜県' },
    { code: '22', name: '静岡県' },
    { code: '23', name: '愛知県' },
    { code: '24', name: '三重県' },
    { code: '25', name: '滋賀県' },
    { code: '26', name: '京都府' },
    { code: '27', name: '大阪府' },
    { code: '28', name: '兵庫県' },
    { code: '29', name: '奈良県' },
    { code: '30', name: '和歌山県' },
    { code: '31', name: '鳥取県' },
    { code: '32', name: '島根県' },
    { code: '33', name: '岡山県' },
    { code: '34', name: '広島県' },
    { code: '35', name: '山口県' },
    { code: '36', name: '徳島県' },
    { code: '37', name: '香川県' },
    { code: '38', name: '愛媛県' },
    { code: '39', name: '高知県' },
    { code: '40', name: '福岡県' },
    { code: '41', name: '佐賀県' },
    { code: '42', name: '長崎県' },
    { code: '43', name: '熊本県' },
    { code: '44', name: '大分県' },
    { code: '45', name: '宮崎県' },
    { code: '46', name: '鹿児島県' },
    { code: '47', name: '沖縄県' },
  ];
  

  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          利用登録
        </h2>
      </div>
      
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={onSubmit}>
        <label
            htmlFor="name"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            名前
          </label>
          <input
            type="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />

<label
            htmlFor="prefecture"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            お住まいの都道府県
          </label>
          <select
        id="prefecture"
        required
        value={prefecture}
        onChange={(e) => setPrefecture(e.target.value)}
        className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      >
        <option value="" disabled>
          都道府県を選択してください
        </option>
        {allPrefectures.map((pref) => (
          <option key={pref.code} value={pref.code}>
            {pref.name}
          </option>
        ))}
      </select>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            メールアドレス
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
            <label className="block text-sm font-medium leading-6 text-gray-900">
              パスワード
            </label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

            <label className="block text-sm font-medium leading-6 text-gray-900">
              パスワード（確認）
            </label>
            <input
              type="password"
              required
              value={passwordConf}
              onChange={(e) => setPasswordConf(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 mt-4"
            >
              登録
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
