export function Tanbun(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <section style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 2 ? (
        <div>○文を一つ作りましょう。</div>
      ) : grade == 1 ? (
        <div>文を　一つ　つくりましょう。</div>
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
    </section>
  );
}
