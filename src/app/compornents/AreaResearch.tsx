import Link from "next/link";
import React from "react";

const AreaResearch = () => {
  return (
    <div>
        <label htmlFor="areaResearch">エリアから検索</label>
        <table>
          <tbody>
            <tr>
              <th>北海道</th>
              <td>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "hokkaido" },
                  }}
                >
                  北海道
                </Link>
              </td>
            </tr>
            <tr>
              <th>東北</th>
              <td>
                <Link
                  href={{ pathname: "/resultarea", query: { area: "aomori" } }}
                >
                  青森
                </Link>
                <Link
                  href={{ pathname: "/resultarea", query: { area: "iwate" } }}
                >
                  岩手
                </Link>
                <Link
                  href={{ pathname: "/resultarea", query: { area: "akita" } }}
                >
                  秋田
                </Link>
                <Link
                  href={{ pathname: "/resultarea", query: { area: "miyagi" } }}
                >
                  宮城
                </Link>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "yamagata" },
                  }}
                >
                  山形
                </Link>

                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "fukushima" },
                  }}
                >
                  福島
                </Link>
              </td>
            </tr>
            <tr>
              <th>関東</th>
              <td>
              <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "ibaraki" },
                  }}
                >
                  茨城
                </Link>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "tochigi" },
                  }}
                >
                  栃木
                </Link>

                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "gunma" },
                  }}
                >
                  群馬
                </Link>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "saitama" },
                  }}
                >
                  </Link>
                  埼玉
                  <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "chiba" },
                  }}
                >
                  千葉
                </Link>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "kanagawa" },
                  }}
                >
                  神奈川
                </Link>
                <Link
                  href={{
                    pathname: "/resultarea",
                    query: { area: "tokyo" },
                  }}
                >
                  東京
                </Link>
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
    </div>
  );
};

export default AreaResearch;
