export function Imi(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <section style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 2 ? (
        <div>○漢字の意味を書きましょう</div>
      ) : grade == 1 ? (
        <div>○かん字のいみをかきましょう</div>
      ) : (
        <div>　</div>
      )}

      <div
        className="kanji_imi relative"
        style={{
          width: `${Size}cm`,
          height: `${Size * 7}cm`,
          marginBlockStart:"0cm"
        }}
      >
        <div className="yLine"></div>
      </div>
    </section>
  );
}
