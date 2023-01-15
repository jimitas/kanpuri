export function Jukugo(props) {
  const Size = props.size;
  return (
    <section>
      <div>○熟語を書きましょう</div>
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
