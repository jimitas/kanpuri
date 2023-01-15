export function Kakusu(props) {
  const Size = props.size;
  const grade = props.g;
  return (
    <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
      <div>画数</div>
      <div
        className="kakusu"
        style={{
          fontSize: `${Size * 0.3}cm`,
          width: `${Size}cm`,
          height: `${Size}cm`,
        }}
      >
        画
      </div>
    </div>
  );
}
