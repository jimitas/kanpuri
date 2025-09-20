export function Naritachi(props) {
  const { size, grade } = props;
  return (
    <div style={{ paddingBlockStart: `${size * 0.1}cm` }}>
      {grade > 1 ? (
        <div>○漢字の意味や成り立ちを書きましょう</div>
      ) : grade === 1 ? (
        <div>○かん字の　いみや　なり立ちを　かきましょう</div>
      ) : (
        <div>　</div>
      )}
      <div
        style={{
          width: `${size}cm`,
          height: `${size * 7}cm`,
          border: "1px solid",
        }}
      ></div>
    </div>
  );
}
