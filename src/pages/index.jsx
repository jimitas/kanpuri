import Link from "next/link";
import { Title } from "src/components/";
import { First } from "src/components/First";
import { Imi } from "src/components/Imi";
import { Naritachi } from "src/components/Naritachi";
import { Kurikaeshi } from "src/components/Kurikaeshi";
import { Jukugo } from "src/components/Jukugo";
import { Tanbun } from "src/components/Tanbun";

import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import { useEffect, useState, useRef } from "react";
import styles from "../styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const INDEX = [1, 2, 3, 4, 5, 6];
  const [PaddingX, setPaddingX] = useState(1.0);
  const [PaddingY, setPaddingY] = useState(1.0);
  const [grade, setGrade] = useState(1);
  const [Size, setMasuSize] = useState(2.0);
  const check_flag = [true, false, false, false, false, false];
  const changePaddingX = (e) => {
    setPaddingX((PaddingX) => e.target.value);
  };
  const changePaddingY = (e) => {
    setPaddingY((PaddingY) => e.target.value);
  };
  const changeGrade = (e) => {
    setGrade((grade) => e.target.value);
  };

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
                    <input
                      onChange={changeGrade}
                      type="radio"
                      name="grade"
                      id={grade}
                      value={grade}
                      checked={check_flag[grade - 1]}
                    />
                    {grade}年
                  </label>
                );
              })}
            </div>
          </form>
          <form action="">
            余白　上
            <input className="input_S" onChange={changePaddingY} type="number" value={PaddingY} step="0.1"></input>cm
            余白　右
            <input className="input_S" onChange={changePaddingX} type="number" value={PaddingX} step="0.1"></input>cm
          </form>
        </aside>

        <article
          className="print_pages"
          style={{
            padding: `${PaddingY}cm ${PaddingX}cm`,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignContent: "space-between",
            }}
          >
            <Title g={grade} size={Size}></Title>

            <First g={grade} size={Size}></First>

            <Naritachi g={grade} size={Size}></Naritachi>

            <Imi g={grade} size={Size}></Imi>

            <Kurikaeshi g={grade} size={Size}></Kurikaeshi>

            <Jukugo g={grade} size={Size}></Jukugo>

            <Jukugo size={Size}></Jukugo>

            <Tanbun g={grade} size={Size}></Tanbun>
          </div>
        </article>
      </main>
    </>
  );
}
