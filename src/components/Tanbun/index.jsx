export function Tanbun(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <div style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 1 ? (
        <div>〇文を一つ作りましょう。</div>
      ) : grade == 1 ? (
        <div>〇文を　一つ　つくりましょう。</div>
      ) : (
        <div>　</div>
      )}
      <div
        className="kanji_imi relative"
        style={{
          width: `${Size}cm`,
          height: `${Size * 7}cm`,
        }}
      >
        <div className="yLine"></div>
      </div>
    </div>
  );
}
