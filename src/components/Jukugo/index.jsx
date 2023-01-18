export function Jukugo(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <div style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 5 ? (
        <div>○熟語を書きましょう。</div>
      ) : grade > 3 ? (
        <div>○じゅく語を書きましょう。</div>
      ) : grade == 2 ? (
        <div>○このかん字をつかったことばを書きましょう。</div>
      ) : grade == 1 ? (
        <div>○このかん字を　つかった　ことばを　かきましょう。</div>
      ) : <div>　</div>}

      <div style={{ display: "flex", justifyContent: "space-between", width: `${Size}cm`, height: `${Size * 7}cm` }}>
        <div
          className="kanji_imi relative"
          style={{
            width: `${Size}cm`,
            height: `${Size * 3.2}cm`,
          }}
        >
          <div className="yLine"></div>
        </div>
        <div
          className="kanji_imi relative"
          style={{
            width: `${Size}cm`,
            height: `${Size * 3.5}cm`,
          }}
        >
          <div className="yLine"></div>
        </div>
      </div>
    </div>
  );
}
