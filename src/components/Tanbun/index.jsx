export function Tanbun(props) {
  const Size = props.size;
  return (
    <section>
      <div>○文を１つ作りましょう。</div>
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