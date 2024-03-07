"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import { genres,areas } from "../compornents/ResisterList";
import Image from "next/image";

const GroupSearchResult = () => {
  const searchParams = useSearchParams();
  const area = searchParams.get("place") || ""; 
  const genre = searchParams.get("genre")|| "";
  const category = searchParams.get("category")|| "";
  const rsword = searchParams.get("word") || "";
  let tableSearch: { area?:string,genre?:string,rsword?: string};
  let dbSearch :string;
  let titleLabel: { label: string; value: string; } | undefined;
  if (category==="area"){
    dbSearch = "group_address_prefecture"
    tableSearch = {area}
    titleLabel = areas.find((area) => area.value === tableSearch.area);

  }else if (category==="genre"){
    dbSearch = "group_genre"
    tableSearch = {genre}
    titleLabel = genres.find((genre) => genre.value === tableSearch.genre);
  }
  else if (category==="keyword"){
    tableSearch = {rsword}
  }
  
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getAllResult();
  },);

  async function getAllResult() {
    try {
      if(category === "area" || category === "genre") {
      // const { data, error } = await supabase.from("GROUP_MAIN").select("*").eq(dbSearch,tableSearch);
      const { data, error } = await supabase.from("GROUP_MAIN").select("*")
      console.log('area?')
      if (error) {
        throw error;
      }
      setData(data);
    }else if (category==="keyword"){ 
      
      const { data, error } = await supabase.from('GROUP_MAIN').select('*').like('name', `%${rsword}%`)

      if (error) {
        throw error;
      }
      setData(data);
    }
      
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
    function getGenreLabel(value:string) {
      const genre = genres.find((genre) => genre.value === value);
      return genre ? genre.label : value;
  }

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="text-center px-5 py-5">{titleLabel?.label}のグループ一覧</div>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((group) => (
            <a key={group.id} href={`/detailgroup/${group.id}`} className="group">
            <div className="h-60 overflow-hidden rounded-lg bg-gray-200 flex items-center justify-center">
            {group.image_url && (
              <Image
                src={group.image_url}
                alt="image"
                width={200}
                height={200}// Updated class
              />)}
            </div>
              <h3 className="mt-4 text-sm text-gray-700">{group.group_name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{getGenreLabel(group.group_genre)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default GroupSearchResult;
