import { Item } from "@/types";
import React from "react";

type ReseachListProps = {
  items: Item[];
};

const KeywordResearch = () => {
  return(
  <div>

      <label htmlFor="searchBox">キーワード検索</label>
      <form action="/resultkeyword" method="get">
        <input type="text" id="searchBox" placeholder="例：登山　山梨"  name="word"/>
        <button type="submit">検索</button>
      </form>
    </div>
  )
}
export default KeywordResearch;
