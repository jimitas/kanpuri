export function Kurikaeshi(props) {
  const Size = props.size;
  const MASU_INDEX = [1, 2, 3, 4, 5, 6, 7];
  return (
    <section style={{ display: "flex" }}>
      {/* 後でCSS変数を用いるかも*/}

      {MASU_INDEX.map((MASU_INDEX) => {
        return (
          <div
            key={MASU_INDEX}
            className={MASU_INDEX === 1 ? "masu2_top" : "masu2"}
            style={{ marginBlockStart: `${Size * 0.25}cm`, width: `${Size}cm`, height: `${Size}cm` }}
          >
            {MASU_INDEX < 4 ? <div className="xLine"></div> : null}
            {MASU_INDEX < 6 ? <div className="yLine"></div> : null}
          </div>
        );
      })}
    </section>
  );
}
