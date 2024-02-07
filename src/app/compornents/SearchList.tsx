import React from 'react'
import { useState, useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";

export default function SearchList(keyword:any,category:any) {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getAllResult();
  },);

  async function getAllResult() {
    try {
      const { data, error } = await supabase.from("GROUP_MAIN").select("*").eq('group_genre', '登山');;
      if (error) {
        throw error;
      }
      setData(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div>
    <div>SearchListaaaa、{keyword.keyword}です</div>
    <div>
    {data.map((data) => (
      <a key={data.id} href={`/detailgroup/${data.id}`} className="group">
        <div></div>
        <img src = "https://www.koeitecmo.co.jp/images/top/index01.jpg"    width={100}
    height={100}></img>
        <h3> {data.group_name}</h3>
        <p>
          {data.group_genre}
        </p>
        <p>
          {data.group_address}
        </p>
      </a>
    ))}
      </div>
      </div>
  )}
