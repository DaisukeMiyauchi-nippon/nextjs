"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import { useState,useEffect } from "react";
import { supabase } from "@/utils/supabase/supabaseClient";
import { genres } from "../compornents/ResisterList";
import Image from "next/image";

const EventSearchResult = () => {
  const searchParams = useSearchParams();
  const area = searchParams.get("place") || ""; 
  const genre = searchParams.get("genre")|| "";
  const category = searchParams.get("category")|| "";
  let tableSearch: { area?:string,genre?:string};
  let dbSearch :string;
  if (category==="area"){
    dbSearch = "event_prefecture"
    tableSearch = {area}
  }else if (category==="genre"){
    dbSearch = "event_genre"
    tableSearch = {genre}
  }

  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    getAllResult();
  },);

  async function getAllResult() {
    try {
      // const { data, error } = await supabase.from("EVENT_MAIN").select("*").eq(dbSearch,tableSearch);
      const { data, error } = await supabase.from("EVENT_MAIN").select("*")
      if (error) {
        throw error;
      }
      setData(data);
      
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
        <h2 className="sr-only">Products</h2>
        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {data.map((event) => (
            <a key={event.id} href={`/detailgroup/${event.id}`} className="event">
              <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
              {event.image_url && (
              <Image
                src={event.image_url}
                alt="image"
                width={200}
                height={200}// Updated class
              />)}
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{event.event_name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{getGenreLabel(event.event_genre)}</p>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EventSearchResult;
