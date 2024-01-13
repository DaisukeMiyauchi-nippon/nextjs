"use client";
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import Link from "next/link";

export default function NewEventInfo() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getGroups();
  }, []);

  async function getGroups() {
    try {
      const { data, error } = await supabase.from("GROUP_MAIN").select
      ("*");
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }


  return (
    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
      {data.map((data) => (
        <a key={data.id} href={`/detailgroup/${data.id}`} className="group">
          <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"></div>
          <h3 className="mt-4 text-sm text-gray-700"> {data.group_name}</h3>
          <p className="mt-1 text-lg font-medium text-gray-900">{data.group_genre}</p>
          <p className="mt-1 text-lg font-medium text-gray-900">{data.group_address}</p>
        </a>
      ))}
    </div>
  );
}
