export function Kurikaeshi(props) {
  const { size, grade, pageIndex, positionX, positionY, kanjiFirst, kanjiSecond, opacity } = props;
  const MASU_INDEX = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div style={{ paddingBlockStart: `${size * 0.1}cm` }}>
      {grade > 3 ? (
        <div>○筆順や形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade === 3 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに練習しましょう。</div>
      ) : grade === 2 ? (
        <div>○書きじゅんや形に気をつけて、ていねいに書きましょう。</div>
      ) : grade === 1 ? (
        <div>〇かきじゅんや　かたちに　気をつけて、ていねいに　かきましょう。</div>
      ) : (
        <div>　</div>
      )}

      <div style={{ display: "flex" }}>
        {MASU_INDEX.map((MASU_INDEX) => {
          return (
            <div
              key={MASU_INDEX}
              className={MASU_INDEX === 1 ? "masu2_top" : "masu2"}
              style={{ width: `${size}cm`, height: `${size}cm` }}
            >
              {MASU_INDEX < 4 && pageIndex === 1 ? (
                <div
                  className="nazori_2"
                  style={{
                    fontSize: `${size}cm`,
                    right: `${positionX - 24}px`,
                    top: `${positionY - 2}px`,
                    opacity: `${opacity}`,
                    fontFamily: '"UD デジタル 教科書体 NK-R", "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif',
                  }}
                >
                  {kanjiFirst}
                </div>
              ) : MASU_INDEX < 4 && pageIndex === 2 ? (
                <div
                  className="nazori_2"
                  style={{
                    fontSize: `${size}cm`,
                    right: `${positionX - 24}px`,
                    top: `${positionY - 2}px`,
                    opacity: `${opacity}`,
                    fontFamily: '"UD デジタル 教科書体 NK-R", "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif',
                  }}
                >
                  {kanjiSecond}
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
