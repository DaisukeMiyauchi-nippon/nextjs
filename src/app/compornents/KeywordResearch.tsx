import { Item } from "@/types";
import React from "react";

type ReseachListProps = {
  items: Item[];
};

const KeywordResearch = ({items} : ReseachListProps) => {
  return(
  <div>
    {items.map((item) =>(
      <article className = "shadow" key = {item.id}>
        <p>{item.id}</p>
        <p>{item.user_name_kana}</p>

      </article>

    ))}
      <label htmlFor="searchBox">キーワード検索</label>
      <form action="/resultkeyword" method="get">
        <input type="text" id="searchBox" placeholder="例：登山　山梨"  name="word"/>
        <button type="submit">検索</button>
      </form>
    </div>
  )
}
export default KeywordResearch;
