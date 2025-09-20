import Head from "next/head";
import styles from "../styles/Home.module.css";
import * as se from "src/components/se";

import { useEffect, useState, useRef, useCallback } from "react";
import { Title } from "src/components/Title";
import { TopMasu } from "src/components/TopMasu";
import { Yomikata } from "src/components/Yomikata";
import { Imi } from "src/components/Imi";
import { Bushu } from "src/components/Bushu";
import { Kakusu } from "src/components/Kakusu";
import { Naritachi } from "src/components/Naritachi";
import { Kurikaeshi } from "src/components/Kurikaeshi";
import { Jukugo } from "src/components/Jukugo";
import { Tanbun } from "src/components/Tanbun";

export default function Home() {
  const PAGES = [1, 2];
  const GRADE_OPTIONS = [1, 2, 3, 4, 5, 6];

  const [grade, setGrade] = useState(4);
  const [size, setSize] = useState(1.96);
  const [kanjiFirst, setKanjiFirst] = useState("漢");
  const [kanjiSecond, setKanjiSecond] = useState("字");
  const [opacity, setOpacity] = useState(0.5);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  const [displayOptions, setDisplayOptions] = useState({
    onkun: true,
    bushu: true,
    naritachi: false,
    imi: true,
    kurikaeshi: false,
    jukugo: true,
    tanbun: false
  });

  const [fontStyle, setFontStyle] = useState('mincho');
  const [showToast, setShowToast] = useState(false);
  const [printScale, setPrintScale] = useState(0.97);

  const handleGradeChange = (e) => {
    se.set.play();
    setGrade(Number(e.target.value));
  };

  useEffect(() => {
    const isAdvancedGrade = grade > 2;
    setDisplayOptions(prev => ({
      ...prev,
      onkun: isAdvancedGrade,
      bushu: isAdvancedGrade
    }));
  }, [grade]);

  useEffect(() => {
    const hasShownToast = localStorage.getItem('hasShownGradeToast');
    if (!hasShownToast) {
      setShowToast(true);
      localStorage.setItem('hasShownGradeToast', 'true');

      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);

      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    // 初期化時にCSS変数を設定
    document.documentElement.style.setProperty('--print-scale', printScale);
  }, [printScale]);

  const handleDisplayOptionChange = (option) => {
    se.pi.play();
    setDisplayOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleSizeChange = (e) => {
    se.set.play();
    setSize(Number(e.target.value));
  };

  const handlePositionXChange = (e) => {
    se.kako.play();
    setPositionX(Number(e.target.value));
  };

  const handlePositionYChange = (e) => {
    se.kako.play();
    setPositionY(Number(e.target.value));
  };

  const handleKanjiFirstChange = (e) => {
    se.set.play();
    setKanjiFirst(e.target.value);
  };

  const handleKanjiSecondChange = (e) => {
    se.set.play();
    setKanjiSecond(e.target.value);
  };

  const handleOpacityChange = (e) => {
    se.kako.play();
    setOpacity(Number(e.target.value));
  };

  const handleFontStyleChange = (e) => {
    se.set.play();
    setFontStyle(e.target.value);
  };

  const handlePrintScaleChange = (e) => {
    se.kako.play();
    const newScale = Number(e.target.value);
    setPrintScale(newScale);

    // CSS変数を動的に更新
    document.documentElement.style.setProperty('--print-scale', newScale);
  };

  return (
    <>
      {showToast && (
        <div
          style={{
            position: 'fixed',
            top: '20px',
            right: '20px',
            backgroundColor: '#FF6600',
            color: 'white',
            padding: '12px 16px',
            borderRadius: '6px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
            zIndex: 1000,
            fontSize: '14px',
            fontWeight: 'bold',
            animation: 'toastSlideIn 0.3s ease-out',
          }}
        >
          📚 はじめに学年を選択してください<br />
          🖨️ 印刷時の縮小率を変更できます。
        </div>
      )}
      <style jsx>{`
        @keyframes toastSlideIn {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
      <main className="main">
        {/* asideのコンポーネント化もあるが、asideとarticleとの関わりは、このページを介した方がわかりやすいと判断し、冗長になりそうだが、ここで記述することにする。 */}
        <aside className="no_print" style={{ fontSize: "14px" }}>
          <h3 style={{ fontSize: "18px", margin: "10px 0" }}>地味に助かる漢字プリント作成</h3>
          <small style={{ fontSize: "12px" }}>PCでの使用が前提です。スマホでの確認の場合は「PC版サイトで表示する」を選択してみてください。</small>
          <form action="" style={{ border: "#FF6600 solid 1px", padding: "5px" }}>
            <div style={{ margin: "3px" }}>
              <p style={{ fontSize: "14px", margin: "5px 0" }}>学年選択<span style={{color:"#FF6600", fontSize: "14px"}}>　はじめに選択してください。</span></p>
              {GRADE_OPTIONS.map((gradeOption) => {
                return (
                  <label key={gradeOption} htmlFor={gradeOption} style={{ fontSize: "16px", marginRight: "8px", display: "inline-flex", alignItems: "center" }}>
                    <input
                      onChange={handleGradeChange}
                      type="radio"
                      name="grade"
                      id={gradeOption}
                      value={gradeOption}
                      checked={grade === gradeOption}
                      style={{ marginRight: "3px", transform: "scale(0.8)" }}
                    />
                    {gradeOption}年
                  </label>
                );
              })}
            </div>
          </form>
          <p style={{color:"#FF6600", fontSize: "15px", margin: "8px 0 3px 0", fontWeight: "bold"}}>↓ここに漢字を入力して下さい！</p>
          <div style={{ display: "flex", alignItems: "flex-start", gap: "20px" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div>
                <input
                  onChange={handleKanjiFirstChange}
                  style={{ width: "120px", height: "120px", fontSize: "88px", textAlign: "center", margin: "2px" }}
                  type="text"
                  value={kanjiFirst}
                  placeholder="漢"
                />
                <input
                  onChange={handleKanjiSecondChange}
                  style={{ width: "120px", height: "120px", fontSize: "88px", textAlign: "center", margin: "2px" }}
                  type="text"
                  value={kanjiSecond}
                  placeholder="字"
                />
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", marginTop: "0px" }}>
              <p style={{ fontSize: "14px", margin: "0 0 8px 0", fontWeight: "bold" }}>フォントスタイル</p>
              <label style={{ fontSize: "13px", display: "flex", alignItems: "center", margin: "3px 0", whiteSpace: "nowrap" }}>
                <input
                  type="radio"
                  name="fontStyle"
                  value="mincho"
                  checked={fontStyle === 'mincho'}
                  onChange={handleFontStyleChange}
                  style={{ marginRight: "4px", transform: "scale(0.8)" }}
                />
                明朝体
              </label>
              <label style={{ fontSize: "13px", display: "flex", alignItems: "center", margin: "3px 0", whiteSpace: "nowrap" }}>
                <input
                  type="radio"
                  name="fontStyle"
                  value="gothic"
                  checked={fontStyle === 'gothic'}
                  onChange={handleFontStyleChange}
                  style={{ marginRight: "4px", transform: "scale(0.8)" }}
                />
                ゴシック体
              </label>
            </div>
          </div>
          <div style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
            <div style={{ width: "fit-content" }}>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('onkun')}
                  checked={displayOptions.onkun}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                「音読み・訓読み」を分ける。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('bushu')}
                  checked={displayOptions.bushu}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                「部首・部首名」を表示する。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('naritachi')}
                  checked={displayOptions.naritachi}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                「意味や成り立ち」を表示する。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('imi')}
                  checked={displayOptions.imi}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                「漢字の意味」を表示する。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('kurikaeshi')}
                  checked={displayOptions.kurikaeshi}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                書き写しを2段にする。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('jukugo')}
                  checked={displayOptions.jukugo}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                熟語づくりを2段にする。
              </label>
              <label style={{ fontSize: "14px", display: "flex", alignItems: "center", margin: "3px 0" }}>
                <input
                  type="checkbox"
                  onChange={() => handleDisplayOptionChange('tanbun')}
                  checked={displayOptions.tanbun}
                  style={{ marginRight: "5px", transform: "scale(0.8)" }}
                />
                短文づくりを2段にする。
              </label>
            </div>
            <div style={{ minWidth: "160px", alignSelf: "flex-start" }}>
              <div style={{ fontSize: "14px", margin: "0 0 8px 0", fontWeight: "bold", textAlign: "left" }}>印刷縮小率</div>
              <div style={{ fontSize: "13px", margin: "5px 0", color: "#666", textAlign: "left" }}>
                {Math.round(printScale * 100)}%
              </div>
              <input
                style={{ width: "140px", margin: "2px 0", display: "block" }}
                onChange={handlePrintScaleChange}
                max="1"
                min="0.7"
                step="0.01"
                type="range"
                value={printScale}
              />
            </div>
          </div>

          <div style={{ fontSize: "16px", margin: "5px 0" }}>
            マスの大きさ
            <input
              onChange={handleSizeChange}
              style={{ width: "6rem", height: "2.5rem", fontSize: "16px", textAlign: "center", margin: "0 5px" }}
              type="number"
              step="0.01"
              value={size}
            />
            cm
          </div>
          <div style={{ fontSize: "16px", margin: "5px 0" }}>
            左右
            <input
              onChange={handlePositionXChange}
              style={{ width: "4rem", height: "2rem", fontSize: "14px", textAlign: "center", margin: "0 5px" }}
              type="number"
              step=".5"
              value={positionX}
            />
            上下
            <input
              onChange={handlePositionYChange}
              style={{ width: "4rem", height: "2rem", fontSize: "14px", textAlign: "center", margin: "0 5px" }}
              type="number"
              step=".5"
              value={positionY}
            />
          </div>
          <div style={{ margin: "5px 0" }}>
            <button
              onClick={() => {
                se.set.play();
                const result = window.confirm("印刷ダイアログを開きますか？");
                if (result === false) return;
                window.print();
              }}
              style={{ fontSize: "18px", padding: "2px 6px", margin: "3px" }}
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
              style={{ fontSize: "18px", padding: "2px 6px", margin: "3px" }}
            >
              再読み込み
            </button>
          </div>
          <div style={{ fontSize: "16px", margin: "5px 0" }}>
            文字の濃さ
            <input
              style={{ width: "15rem", display: "block", margin: "2px 0" }}
              onChange={handleOpacityChange}
              max="1"
              min="0"
              step="0.01"
              type="range"
              value={opacity}
            />
          </div>
        </aside>

        <article className="print_pages">
          <Title grade={grade} size={size} />
          <div style={{ display: "flex", alignContent: "space-between" }}>
            {PAGES.map((page) => {
              return (
                <div key={page} style={{ marginInlineEnd: "0.5cm" }}>
                  <div style={{ display: "flex" }}>
                    <TopMasu
                      grade={grade}
                      size={size}
                      kanjiFirst={kanjiFirst}
                      kanjiSecond={kanjiSecond}
                      pageIndex={page}
                      opacity={opacity}
                      positionY={positionY}
                      positionX={positionX}
                      fontStyle={fontStyle}
                    />

                    <Yomikata grade={grade} size={size} show={displayOptions.onkun} />

                    {displayOptions.bushu && <Bushu grade={grade} size={size} />}

                    <Kakusu grade={grade} size={size} />
                  </div>

                  {displayOptions.naritachi && <Naritachi grade={grade} size={size} />}

                  {displayOptions.imi && <Imi grade={grade} size={size} />}

                  <Kurikaeshi
                    grade={grade}
                    size={size}
                    kanjiFirst={kanjiFirst}
                    kanjiSecond={kanjiSecond}
                    pageIndex={page}
                    opacity={opacity}
                    positionY={positionY}
                    positionX={positionX}
                    fontStyle={fontStyle}
                  />

                  {displayOptions.kurikaeshi && (
                    <Kurikaeshi
                      size={size}
                      kanjiFirst={kanjiFirst}
                      kanjiSecond={kanjiSecond}
                      pageIndex={page}
                      opacity={opacity}
                      positionY={positionY}
                      positionX={positionX}
                      fontStyle={fontStyle}
                    />
                  )}

                  <Jukugo grade={grade} size={size} />

                  {displayOptions.jukugo && <Jukugo size={size} />}

                  <Tanbun grade={grade} size={size} />

                  {displayOptions.tanbun && <Tanbun grade={grade} size={size} />}
                </div>
              );
            })}
          </div>
        </article>
      </main>
    </>
  );
}
