import React from 'react'
import { supabase } from "@/utils/supabaseClient";

export default function SearchList(e: any) {
    const searchType = e;
    switch (searchType){
        case "area":
            getArea;
        break;

        case "genre":
            getGenre;
        break;

        case "keyword":
            getKeyword;
            break;
    }
    async function getArea() {
        try {
        const { data, error } = await supabase.from("HOST_MAIN").select("*")//条件記入が必要)
        if (error) {
          throw error;
        }
        return data;
        
        
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      async function getGenre() {
        try {
        const { data, error } = await supabase.from("HOST_MAIN").select("*")//条件記入が必要)
        if (error) {
          throw error;
        }
        return data;
    
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

      async function getKeyword() {
        try {
        const { data, error } = await supabase.from("HOST_MAIN").select("*")//条件記入が必要)
        if (error) {
          throw error;
        }
        return data;
    
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }

    }
