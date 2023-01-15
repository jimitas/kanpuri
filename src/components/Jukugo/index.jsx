export function Jukugo(props) {
  const Size = props.size;
  return (
    <div>
      <div>○熟語を書きましょう</div>
      <div style={{ display: "flex", justifyContent: "space-between", width: `${Size}cm`, height: `${Size * 7}cm` }}>
        <div
          className="kanji_imi relative"
          style={{
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
