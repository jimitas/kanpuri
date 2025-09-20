export function TopMasu(props) {
  const { size, pageIndex, positionX, positionY, kanjiFirst, kanjiSecond, opacity, fontStyle } = props;

  const getFontFamily = () => {
    if (fontStyle === 'gothic') {
      return '"UD デジタル 教科書体 N-R", "UD デジタル 教科書体 NK-R", "游ゴシック", "YuGothic", "ヒラギノ角ゴ ProN W3", "Hiragino Kaku Gothic ProN", "メイリオ", "Meiryo", sans-serif';
    }
    return '"Times New Roman", "游明朝", "YuMincho", "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "MS P明朝", "MS 明朝", serif';
  };

  const getFontWeight = () => {
    return fontStyle === 'gothic' ? '500' : 'bold';
  };

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
            fontFamily: getFontFamily(),
            fontWeight: getFontWeight(),
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
            fontFamily: getFontFamily(),
            fontWeight: getFontWeight(),
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
