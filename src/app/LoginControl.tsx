import { signIn, signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const { data: session } = useSession();
  console.log(session);
  
  return (
    <div>
      {!session && (
        <div>
          <Link href="/signin">
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
        <button
          onClick={() => signOut()}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          サインアウト
        </button>
      )}
    </div>
  );
}
