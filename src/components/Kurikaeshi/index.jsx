export function Kurikaeshi(props) {
  const Size = props.size;
  const grade = props.g;
  const index = props.i;
  const kanji_1 = props.k_1;
  const kanji_2 = props.k_2;
  const opacity = props.o;
  const MASU_INDEX = [1, 2, 3, 4, 5, 6, 7];
  console.log(kanji_1, kanji_2);
  return (
    <div style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 3 ? (
        <div>○筆順や形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade == 3 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade == 2 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに書きましょう。</div>
      ) : grade == 1 ? (
        <div>〇かきじゅんや　かたちに　気をつけて、ていねいに　かきましょう。</div>
      ) : (
        <div>　</div>
      )}

      <div style={{ display: "flex" }}>
        {/* 後でCSS変数を用いるかも*/}

        {MASU_INDEX.map((MASU_INDEX) => {
          return (
            <div
              key={MASU_INDEX}
              className={MASU_INDEX === 1 ? "masu2_top" : "masu2"}
              style={{ width: `${Size}cm`, height: `${Size}cm` }}
            >
              {MASU_INDEX < 4 && index === 1 ? (
                <div
                  className="nazori_2"
                  style={{
                    position: "absolute",
                    zIndex: "100",
                    fontSize: `${Size}cm`,
                    right: `${ichiX - 7}px`,
                    top: `${ichiY - 2}px`,
                    opacity: `${opacity}`,
                  }}
                >
                  {kanji_1}
                </div>
              ) : MASU_INDEX < 4 && index === 2 ? (
                <div
                  className="nazori_2"
                  style={{
                    position: "absolute",
                    zIndex: "100",
                    fontSize: `${Size}cm`,
                    right: `${ichiX - 7}px`,
                    top: `${ichiY - 2}px`,
                    opacity: `${opacity}`,
                  }}
                >
                  {kanji_2}
                </div>
              ) : null}
              {MASU_INDEX < 4 ? <div className="xLine"></div> : null}
              {MASU_INDEX < 6 ? <div className="yLine"></div> : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}
