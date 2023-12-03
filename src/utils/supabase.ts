import { createClient } from "@supabase/supabase-js";

export default createClient(
  process.env.NEXT_PUBLIC_SUPABASE!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);