export function Kurikaeshi(props) {
  const Size = props.size;
  const grade = props.g;
  const MASU_INDEX = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div>
      {grade > 3 ? (
        <div>○筆順や形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade == 3 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade == 2 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに書きましょう。</div>
      ) : grade == 1 ? (
        <div>かきじゅんやかたちに気をつけて、ていねいにかきましょう。</div>
      ) : <div>　</div>}
      <div style={{ display: "flex" }}>
        {/* 後でCSS変数を用いるかも*/}

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
      </div>
    </div>
  );
}
