import React from "react";

const AreaResearch = () => {
  return (
    <div>
      <form action="#" method="post">
      <label htmlFor="areaResearch">エリアから検索</label>
      <table>
        <tbody>
          <tr>
            <th>北海道</th>
            <td>
              <a href="#">北海道</a>
            </td>
          </tr>
          <tr>
            <th>東北</th>
            <td>
              <a href="#">青森</a> <a href="#">岩手</a> <a href="#">秋田</a>{" "}
              <a href="#">宮城</a> <a href="#">山形</a> <a href="#">福島</a>
            </td>
          </tr>
          <tr>
            <th>関東</th>
            <td>
              <a href="#">茨城</a> <a href="#">栃木</a> <a href="#">群馬</a>{" "}
              <a href="#">埼玉</a> <a href="#">千葉</a> <a href="#">神奈川</a>{" "}
              <a href="#">東京</a>
            </td>
          </tr>
          <tr>
            <th>中部</th>
            <td>
              <a href="#">新潟</a> <a href="#">富山</a> <a href="#">石川</a>{" "}
              <a href="#">福井</a> <a href="#">山梨</a> <a href="#">長野</a>{" "}
              <a href="#">岐阜</a> <a href="#">静岡</a> <a href="#">愛知</a>
            </td>
          </tr>
          <tr>
            <th>近畿</th>
            <td>
              <a href="#">三重</a> <a href="#">滋賀</a> <a href="#">京都</a>{" "}
              <a href="#">大阪</a> <a href="#">兵庫</a> <a href="#">奈良</a>{" "}
              <a href="#">和歌山</a>
            </td>
          </tr>
          <tr>
            <th>中国</th>
            <td>
              <a href="#">鳥取</a> <a href="#">島根</a> <a href="#">岡山</a>{" "}
              <a href="#">広島</a> <a href="#">山口</a>
            </td>
          </tr>
          <tr>
            <th>四国</th>
            <td>
              <a href="#">徳島</a> <a href="#">香川</a> <a href="#">愛媛</a>{" "}
              <a href="#">高知</a>
            </td>
          </tr>
          <tr>
            <th>九州</th>
            <td>
              <a href="#">福岡</a> <a href="#">佐賀</a> <a href="#">長崎</a>{" "}
              <a href="#">熊本</a> <a href="#">大分</a> <a href="#">宮崎</a>{" "}
              <a href="#">鹿児島</a> <a href="#">沖縄</a>
            </td>
          </tr>
        </tbody>
      </table>
      </form>
    </div>
  );
};

export default AreaResearch;
