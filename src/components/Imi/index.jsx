export function Imi(props) {
  const Size = props.size;
  return (
    <section>
      <div>○漢字の意味を書きましょう</div>
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
