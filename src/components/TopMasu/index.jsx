export function TopMasu(props) {
  const Size = props.size;
  const index = props.i;
  const ichiX = props.r;
  const ichiY = props.t;
  const kanji_1 = props.k_1;
  const kanji_2 = props.k_2;
  const opacity = props.o;

  console.log(Size);

  return (
    <div
      className="masu relative"
      style={{
        marginBlockStart: `${Size * 0.25}cm`,
        width: `${Size * 1.5}cm`,
        height: `${Size * 1.5}cm`,
      }}
    >
      {index === 1 ? (
        <div
          className="nazori"
          style={{
            fontSize: `${Size * 1.5}cm`,
            right: `${ichiX * 1.5 - 10}px`,
            top: `${ichiY * 1.5 - 3}px`,
            opacity: `${opacity}`,
          }}
        >
          {kanji_1}
        </div>
      ) : (
        <div
          className="nazori"
          style={{
            fontSize: `${Size * 1.5}cm`,
            right: `${ichiX - 10}px`,
            top: `${ichiY - 3}px`,
            opacity: `${opacity}`,
          }}
        >
          {kanji_2}
        </div>
      )}
      <div className="xLine"></div>
      <div className="yLine"></div>
    </div>
  );
}
