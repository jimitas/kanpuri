export function TopMasu(props) {
  const { size, pageIndex, positionX, positionY, kanjiFirst, kanjiSecond, opacity } = props;

  return (
    <div
      className="masu relative"
      style={{
        marginBlockStart: `${size * 0.25}cm`,
        width: `${size * 1.5}cm`,
        height: `${size * 1.5}cm`,
      }}
    >
      {pageIndex === 1 ? (
        <div
          className="nazori"
          style={{
            fontSize: `${size * 1.5}cm`,
            right: `${positionX * 1.5 - 36}px`,
            top: `${positionY * 1.5 - 3}px`,
            opacity: `${opacity}`,
            fontFamily: '"UD デジタル 教科書体 NK-R", "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif',
          }}
        >
          {kanjiFirst}
        </div>
      ) : (
        <div
          className="nazori"
          style={{
            fontSize: `${size * 1.5}cm`,
            right: `${positionX - 36}px`,
            top: `${positionY - 3}px`,
            opacity: `${opacity}`,
            fontFamily: '"UD デジタル 教科書体 NK-R", "ヒラギノ角ゴ ProN W3", HiraKakuProN-W3, 游ゴシック, "Yu Gothic", メイリオ, Meiryo, Verdana, Helvetica, Arial, sans-serif',
          }}
        >
          {kanjiSecond}
        </div>
      )}
      <div className="xLine"></div>
      <div className="yLine"></div>
    </div>
  );
}
