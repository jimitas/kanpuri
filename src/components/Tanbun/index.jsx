export function Tanbun(props) {
  const { size, grade } = props;
  return (
    <div style={{ paddingBlockStart: `${size * 0.1}cm` }}>
      {grade > 1 ? (
        <div>〇文を一つ作りましょう。</div>
      ) : grade === 1 ? (
        <div>〇文を　一つ　つくりましょう。</div>
      ) : (
        <div>　</div>
      )}
      <div
        className="kanji_imi relative"
        style={{
          width: `${size}cm`,
          height: `${size * 7}cm`,
        }}
      >
        <div className="yLine"></div>
      </div>
    </div>
  );
}
