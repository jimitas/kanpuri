import { useEffect, useState, useRef, useCallback } from "react";
import * as se from "src/components/se";

export function Aside(props) {
  const INDEX = [1, 2, 3, 4, 5, 6];
  const [grade, setGrade] = useState(4);
  const [Size, setSize] = useState(1.96);
  const [kanji_1, setKanji_1] = useState("漢");
  const [kanji_2, setKanji_2] = useState("字");
  const [isShow_onkun, setIsshow_onkun] = useState(true);
  const [isShow_bushu, setIsshow_bushu] = useState(true);
  const [isShow_naritachi, setIsshow_naritachi] = useState(false);
  const [isShow_imi, setIsshow_imi] = useState(true);
  const [isShow_kurikaeshi, setIsShow_kurikaeshi] = useState(false);
  const [isShow_jukugo, setIsShow_jukugo] = useState(true);
  const [isShow_tanbun, setIsShow_tanbun] = useState(false);
  const [opacity, setOpacity] = useState(0.5);
  const [ichiX, setIchiX] = useState(0);
  const [ichiY, setIchiY] = useState(0);

  //後で学年に合わせた構成を設定する。
  const changeGrade = (e) => {
    se.set.play();
    setGrade((grade) => e.target.value);
  };

  useEffect(() => {
    setIsshow_onkun((isShow_onkun) => {
      if (grade > 2) {
        return true;
      }
      return false;
    });
    setIsshow_bushu((isShow_bushu) => {
      if (grade > 2) {
        return true;
      }
      return false;
    });
  }, [grade]);

  const changeOnkun = (e) => {
    se.pi.play();
    setIsshow_onkun((isShow_onkun) => {
      return !isShow_onkun;
    });
  };

  const changeBushu = (e) => {
    se.pi.play();
    setIsshow_bushu((isShow_bushu) => {
      return !isShow_bushu;
    });
  };

  const changeNaritachi = (e) => {
    se.pi.play();
    setIsshow_naritachi((isShow_naritachi) => {
      return !isShow_naritachi;
    });
  };

  const changeImi = (e) => {
    se.pi.play();
    setIsshow_imi((isShow_imi) => {
      return !isShow_imi;
    });
  };

  const changeKurikaeshi = (e) => {
    se.pi.play();
    setIsShow_kurikaeshi((isShow_kurikaeshi) => {
      return !isShow_kurikaeshi;
    });
  };

  const changeJukugo = (e) => {
    se.pi.play();
    setIsShow_jukugo((isShow_jukugo) => {
      return !isShow_jukugo;
    });
  };

  const changeTanbun = (e) => {
    se.pi.play();
    setIsShow_tanbun((isShow_tanbun) => {
      return !isShow_tanbun;
    });
  };

  const changeSize = (e) => {
    se.set.play();
    setSize((Size) => e.target.value);
  };
  const changeIchiX = (e) => {
    se.kako.play();
    setIchiX((ichiX) => e.target.value);
  };

  const changeIchiY = (e) => {
    se.kako.play();
    setIchiY((ichiY) => e.target.value);
  };

  const changeKanji_1 = (e) => {
    se.set.play();
    setKanji_1((kanji_1) => e.target.value);
  };
  const changeKanji_2 = (e) => {
    se.set.play();
    setKanji_2((kanji_2) => e.target.value);
  };

  return (
    <aside className="no_print">
      <h3>地味に助かる漢字プリント作成</h3>
      <p>PCでの使用が前提です。スマホでの確認の場合は「PC版サイトで表示する」を選択してみてください。</p>
      <form action="" style={{ border: "red solid 1px" }}>
        <div style={{ margin: "5px" }}>
          <p>学年選択</p>
          {INDEX.map((item) => {
            return (
              <label key={item} For={item}>
                <input onChange={changeGrade} type="radio" name="grade" id={item} value={item} />
                {item}年
              </label>
            );
          })}
        </div>
      </form>
      <p>↓ここに漢字を入力して下さい！</p>
      <input
        onChange={changeKanji_1}
        style={{ width: "160px", height: "160px", fontSize: "100px", textAlign: "center" }}
        type="text"
        name=""
        id=""
      />
      <input
        onChange={changeKanji_2}
        style={{ width: "160px", height: "160px", fontSize: "100px", textAlign: "center" }}
        type="text"
        name=""
        id=""
      />
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeOnkun} checked={isShow_onkun} />
        「音読み・訓読み」を分ける。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeBushu} checked={isShow_bushu} />
        「部首・部首名」を表示する。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeNaritachi} checked={isShow_naritachi} />
        「意味や成り立ち」を表示する。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeImi} checked={isShow_imi} />
        「漢字の意味」を表示する。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeKurikaeshi} checked={isShow_kurikaeshi} />
        書き写しを2段にする。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeJukugo} checked={isShow_jukugo} />
        熟語づくりを2段にする。
      </label>
      <br />
      <label>
        <input type="checkbox" name="" id="" onChange={changeTanbun} checked={isShow_tanbun} />
        短文づくりを2段にする。
      </label>
      <br />
      マスの大きさ
      <input
        onChange={changeSize}
        style={{ width: "8rem", height: "4rem", fontSize: "2rem", textAlign: "center" }}
        type="number"
        step="0.01"
        value={Size}
      />
      cm
      <br />
      左右
      <input
        onChange={changeIchiX}
        style={{ width: "6rem", height: "3rem", fontSize: "1.5rem", textAlign: "center" }}
        type="number"
        step=".5"
        value={ichiX}
      />
      上下
      <input
        onChange={changeIchiY}
        style={{ width: "6rem", height: "3rem", fontSize: "1.5rem", textAlign: "center" }}
        type="number"
        step=".5"
        value={ichiY}
      />
      <br />
      <button
        onClick={() => {
          se.set.play();
          const result = window.confirm("印刷ダイアログを開きますか？");
          if (result === false) return;
          window.print();
        }}
      >
        印刷
      </button>
      <button
        onClick={() => {
          se.set.play();
          const result = window.confirm("再読み込みして　リセットしますか？");
          if (result === false) return;
          location.reload();
        }}
      >
        再読み込み
      </button>
      <br />
      文字の濃さ
      <input
        style={{ width: "20rem" }}
        onChange={(e) => {
          se.kako.play();
          setOpacity((opacity) => Number(e.target.value));
        }}
        max="1"
        min="0"
        step="0.01"
        type="range"
        name=""
        id=""
      />
    </aside>
  );
}
