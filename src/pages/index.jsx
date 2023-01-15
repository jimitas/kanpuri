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
  const [isShow_naritachi, setIsshow_naritachi] = useState(false);
  const [isShow_imi, setIsshow_imi] = useState(true);
  const [isShow_kurikaeshi, setIsShow_kurikaeshi] = useState(false);
  const [isShow_jukugo, setIsShow_jukugo] = useState(true);
  const [isShow_tanbun, setIsShow_tanbun] = useState(false);
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

  const changeNaritachi = (e) => {
    setIsshow_naritachi((isShow_naritachi) => {
      return !isShow_naritachi;
    });
  };

  const changeImi = (e) => {
    setIsshow_imi((isShow_imi) => {
      return !isShow_imi;
    });
  };

  const changeKurikaeshi = (e) => {
    setIsShow_kurikaeshi((isShow_kurikaeshi) => {
      return !isShow_kurikaeshi;
    });
  };

  const changeJukugo = (e) => {
    setIsShow_jukugo((isShow_jukugo) => {
      return !isShow_jukugo;
    });
  };

  const changeTanbun = (e) => {
    setIsShow_tanbun((isShow_tanbun) => {
      return !isShow_tanbun;
    });
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

          <form action="">
            <input type="checkbox" name="" id="" onChange={changeNaritachi} checked={isShow_naritachi} />
            意味や成り立ち
          </form>

          <form action="">
            <input type="checkbox" name="" id="" onChange={changeImi} checked={isShow_imi} />
            漢字の意味
          </form>

          <form action="">
            <input type="checkbox" name="" id="" onChange={changeKurikaeshi} checked={isShow_kurikaeshi} />
            書き写しを2段にする。
          </form>

          <form action="">
            <input type="checkbox" name="" id="" onChange={changeJukugo} checked={isShow_jukugo} />
            熟語づくりを2段にする。
          </form>

          <form action="">
            <input type="checkbox" name="" id="" onChange={changeTanbun} checked={isShow_tanbun} />
            短文づくりを2段にする。
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

            {isShow_naritachi === true ? <Naritachi g={grade} size={Size}></Naritachi> : null}

            {isShow_imi === true ? <Imi g={grade} size={Size}></Imi> : null}

            <Kurikaeshi g={grade} size={Size}></Kurikaeshi>

            {isShow_kurikaeshi === true ? <Kurikaeshi g={grade} size={Size}></Kurikaeshi> : null}

            <Jukugo g={grade} size={Size}></Jukugo>

            {isShow_jukugo === true ? <Jukugo size={Size}></Jukugo> : null}

            <Tanbun g={grade} size={Size}></Tanbun>

            {isShow_tanbun === true ? <Tanbun g={grade} size={Size}></Tanbun> : null}
          </div>
        </article>
      </main>
    </>
  );
}
