export function Naritachi(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <div style={{ paddingBlockStart: `${Size * 0.1}cm` }}>
      {grade > 1 ? (
        <div>○漢字の意味や成り立ちを書きましょう</div>
      ) : grade == 1 ? (
        <div>○かん字の　いみや　なり立ちを　かきましょう</div>
      ) : (
        <div>　</div>
      )}
      <div
        style={{
          width: `${Size}cm`,
          height: `${Size * 7}cm`,
          border: "1px solid",
        }}
      ></div>
    </div>
  );
}
