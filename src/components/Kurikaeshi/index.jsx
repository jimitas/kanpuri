export function Kurikaeshi(props) {
  const { size, grade, pageIndex, positionX, positionY, kanjiFirst, kanjiSecond, opacity, fontStyle } = props;

  const getFontFamily = () => {
    if (fontStyle === 'gothic') {
      return '"UD デジタル 教科書体 N-R", "UD デジタル 教科書体 NK-R", "游ゴシック", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif';
    }
    return '"Times New Roman", "游明朝", "YuMincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "MS P明朝", "MS 明朝", serif';
  };

  const getFontWeight = () => {
    return fontStyle === 'gothic' ? '500' : 'bold';
  };
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
                    fontFamily: getFontFamily(),
                    fontWeight: getFontWeight(),
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
                    fontFamily: getFontFamily(),
                    fontWeight: getFontWeight(),
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
