import React from "react";

const KeywordResearch = () => {
  return (
    <div>
      <label htmlFor="searchBox">キーワード検索</label>
      <form action="#" method="post">
        <input type="text" id="searchBox" placeholder="例：登山　山梨" />
        <button type="submit">検索</button>
      </form>
      <div id="searchResults">{/* 検索結果はここに表示されます */}</div>
    </div>
  );
};

export default KeywordResearch;
