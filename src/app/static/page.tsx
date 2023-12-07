import Link from "next/link";
import { supabase } from "@/utils/supabaseClient";

export default async function Groups() {
  const { data: groups } = await supabase.from("GROUP_MAIN").select("id, group_name");

  if (!groups) {
    return <p>No posts found.</p>;
  }

  return groups.map((group) => (
    <p key={group.id}>
      <Link href={`/static/${group.id}`}>{group.group_name}</Link>
    </p>
  ));
}