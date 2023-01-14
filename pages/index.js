import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const ITEM = [1, 2, 3, 4, 5, 6, 7, 8];
  const [PaddingX, setPaddingX] = useState(1.0);
  const [PaddingY, setPaddingY] = useState(1.0);
  const [Size, setMasuSixe] = useState(2.0);
  const title = {
    g: "三年", //grade
    t: "漢字プリント", //title
    p_1: 120, //page_1
    p_2: 121, //page_2
    n: "名前（　　　　　　　　　　　　　　　　　　　　　）", //name
  };
  const changePaddingX = (e) => {
    setPaddingX((PaddingX) => e.target.value);
  };
  const changePaddingY = (e) => {
    setPaddingY((PaddingY) => e.target.value);
  };
  // 日付

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <aside>
          余白　縦
          <input className="input_S" onChange={changePaddingY} type="number" value={PaddingY} step="0.1"></input>cm
          余白　横
          <input className="input_S" onChange={changePaddingX} type="number" value={PaddingX} step="0.1"></input>cm
        </aside>

        <article className="print_pages" style={{ padding: `${PaddingY}cm ${PaddingX}cm` }}>
          <h1>
            {title.g} {title.t} {title.p_1}・{title.p_2} {title.n}
          </h1>

          <div style={{ display: "flex" }}>
            <div>
              <section style={{ display: "flex" }}>
                <div
                  className="masu relative"
                  style={{
                    marginBlockStart: `${Size * 0.25}cm`,
                    width: `${Size}cm`,
                    height: `${Size}cm`,
                  }}
                >
                  <div className="xLine"></div>
                  <div className="yLine"></div>
                </div>

                <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
                  <div>読み方</div>
                  <div
                    className="yomikata relative"
                    style={{
                      width: `${Size}cm`,
                      height: `${Size * 3.25}cm`,
                    }}
                  >
                    <div className="yLine"></div>

                    <div className="yomikata_head">
                      <div style={{ flex: "1" }}></div>
                      <div>音</div>
                      <div style={{ flex: "2" }}></div>
                      <div>訓</div>
                      <div style={{ flex: "1" }}></div>
                    </div>
                    <div
                      className="yomikagta_data"
                      style={{
                        display: "flex",
                        borderInlineStart: "solid 1px",
                      }}
                    ></div>
                  </div>
                </div>

                <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
                  <small>部首・部首名</small>
                  <div style={{ width: `${Size}cm`, height: `${Size}cm`, border: "solid 1px" }}></div>
                </div>

                <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
                  <div>画数</div>
                  <div
                    className="kakusu"
                    style={{
                      fontSize: `${Size * 0.3}cm`,
                      width: `${Size}cm`,
                      height: `${Size}cm`,
                    }}
                  >
                    画
                  </div>
                </div>
              </section>

              <section>
                <div>○漢字の意味を書きましょう</div>
                <div
                  className="kanji_imi relative"
                  style={{
                    width: `${Size}cm`,
                    height: `${Size * 7}cm`,
                  }}
                >
                  <div className="yLine"></div>
                </div>
              </section>

              <section style={{ display: "flex" }}>
                {/* 後でmap出繰り返す予定 CSS変数を用いる*/}
                <div
                  className="masu2_top"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  <div className="xLine"></div>
                  <div className="yLine"></div>
                </div>
                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  <div className="xLine"></div>
                  <div className="yLine"></div>
                </div>

                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  <div className="xLine"></div>
                  <div className="yLine"></div>
                </div>
                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  <div className="yLine"></div>
                </div>
                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  <div className="yLine"></div>
                </div>
                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                ></div>
                <div
                  className="masu2"
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                ></div>
              </section>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
