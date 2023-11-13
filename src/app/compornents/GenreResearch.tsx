import React from "react";

const GenreResearch = () => {
  return (
    <div>
      <form action='#' method='post'>
      <label htmlFor="jenreBox">ジャンル検索</label>
      <select name="jenreOutdoor" className="jenreSearch-select">
        <option hidden>アウトドア</option>
        <option value="1">登山</option>
        <option value="2">キャンプ</option>
        <option value="3">スキー・スノーボード</option>
        <option value="4">釣り</option>
      </select>

      <select name="jenreSports" className="jenreSearch-select">
        <option hidden>スポーツ</option>
        <option value="10">野球</option>
        <option value="11">サッカー・フットサル</option>
        <option value="12">テニス</option>
        <option value="13">バドミントン</option>
      </select>

      <select name="jenrehobby" className="jenreSearch-select">
        <option hidden>趣味・教養</option>
        <option value="10">読書会</option>
        <option value="11">茶道</option>
        <option value="12">マジック</option>
        <option value="13">音楽</option>
      </select>

      </form>
    </div>
  );
};

export default GenreResearch;
