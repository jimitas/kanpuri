export function Kakusu(props) {
  const { size, grade } = props;
  return (
    <div style={{ marginInlineStart: `${size * 0.25}cm` }}>
      <div>画数</div>
      <div
        className="kakusu"
        style={{
          fontSize: `${size * 0.3}cm`,
          width: `${size * 1.5}cm`,
          height: `${size}cm`,
        }}
      >
        画
      </div>
    </div>
  );
}
