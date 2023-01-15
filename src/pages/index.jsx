import Link from "next/link";
import { Title } from "../components/Title";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const MASU_INDEX = [1, 2, 3, 4, 5, 6, 7];
  const INDEX = [1, 2, 3, 4, 5, 6];
  // const GRADE = ["一年", "二年", "三年", "四年", "五年", "六年"];
  // const TITLE = ["かん字プリント", "かん字プリント", "漢字プリント", "漢字プリント", "漢字プリント", "漢字プリント"];
  const [PaddingX, setPaddingX] = useState(1.0);
  const [PaddingY, setPaddingY] = useState(1.0);
  const [grade, setGrade] = useState(1);
  const [Size, setMasuSize] = useState(2.0);
  const changePaddingX = (e) => {
    setPaddingX((PaddingX) => e.target.value);
  };
  const changePaddingY = (e) => {
    setPaddingY((PaddingY) => e.target.value);
  };
  const changeGrade = (e) => {
    setGrade((grade) => e.target.value);
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
        <aside className={styles.aside}>
          <form action="" style={{ border: "red solid 1px" }}>
            <div style={{ margin: "5px" }}>
              <p>学年選択</p>
              {INDEX.map((grade) => {
                return (
                  <label key={grade} For={grade}>
                    <input onChange={changeGrade} type="radio" name="grade" id={grade} value={grade} />
                    {grade}年
                  </label>
                );
              })}
            </div>
          </form>
          <form action="">
            余白　縦
            <input className="input_S" onChange={changePaddingY} type="number" value={PaddingY} step="0.1"></input>cm
            余白　横
            <input className="input_S" onChange={changePaddingX} type="number" value={PaddingX} step="0.1"></input>cm
          </form>
        </aside>

        <article className="print_pages" style={{ padding: `${PaddingY}cm ${PaddingX}cm` }}>
          {/* <h1>
            {GRADE[grade - 1]} {TITLE[grade - 1]} {title.p_1}・{title.p_2} {title.n}
          </h1> */}
          {/* <Title g={GRADE[grade - 1]} t={TITLE[grade - 1]} p_1={p_1} p_2={p_2} n={n}></Title> */}
          {/* <Title g={GRADE[grade - 1]} t={TITLE[grade - 1]} p_1={title.p_1} */}
          <Title g={grade} size={Size}></Title>

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
            {/* CSS変数を用いる*/}

            {MASU_INDEX.map((MASU_INDEX) => {
              return (
                <div
                  key={MASU_INDEX}
                  className={MASU_INDEX === 1 ? "masu2_top" : "masu2"}
                  style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
                >
                  {MASU_INDEX < 4 ? <div className="xLine"></div> : null}
                  {MASU_INDEX < 6 ? <div className="yLine"></div> : null}
                </div>
              );
            })}
          </section>
        </article>
      </main>
    </>
  );
}