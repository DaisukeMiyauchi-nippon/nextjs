"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";
import Link from "next/link";
import Image from "next/image";

export default function NewGroupInfo() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    getGroups();
  }, []);

  async function getGroups() {
    const tenDaysAgo = new Date(); // 現在時刻を取得
    tenDaysAgo.setDate(tenDaysAgo.getDate() - 100); // 10日前の日付に設定

    try {
      const { data, error } = await supabase
        .from("GROUP_MAIN")
        .select("*")
        .gte("created_at", tenDaysAgo.toISOString())
        .limit(10)
        .order("created_at", { ascending: false });
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-4 sm:px-6 sm:py-8 lg:max-w-7xl lg:px-6">
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-x-10">
          {data.map((group) => (
            <a key={group.id} href={`/detailgroup/${group.id}`} className="group">
            <div className="h-48 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
            {group.image_url && (
              <Image
                src={group.image_url}
                alt="image"
                width={200}
                height={200}// Updated class
              />)}
            </div>
              <h3 className="mt-4 text-sm text-gray-700">{group.group_name}</h3>
              <p className="mt-1 text-sm font-medium text-gray-900">{group.group_genre}／{group.group_address_prefecture}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
