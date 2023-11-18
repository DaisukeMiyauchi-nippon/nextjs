import { getServerSession } from "next-auth";
import { LogoutButton, LoginButton } from "./compornents/LoginButton";
import { authOptions } from "./option";
import { redirect } from "next/navigation";

export default async function LoginControl() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return <LoginButton />;
  } else {
    return (
      <main>
        <div>Welcome: {session?.user?.name}</div>
        <div>{session?.user?.email}</div>
        <LogoutButton />
      </main>
    );
  }
}
