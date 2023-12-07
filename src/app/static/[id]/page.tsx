import { notFound } from "next/navigation";
import { supabase } from "@/utils/supabaseClient"

export async function generateStaticParams() {
    const { data: groups } = await supabase.from("GROUP_MAIN").select("id");
  
    return groups?.map(({ id }) => ({
        id: id.toString(),
    }));
  }
  
  export default async function Group({
    params: { id },
  }: {
    params: { id: number };
  }) {
    const { data: group } = await supabase
      .from("GROUP_MAIN")
      .select("group_name, group_genre")
      .match({ id })
      .single();
  
    if (!group) {
      notFound();
    }
  
    return <pre>{JSON.stringify(group, null, 2)}</pre>;
  }