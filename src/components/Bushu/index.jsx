export function Bushu(props) {
  const { size } = props;
  return (
    <div style={{ marginInlineStart: `${size * 0.25}cm` }}>
      <small>部首・部首名</small>
      <div style={{ width: `${size * 1.5}cm`, height: `${size}cm`, border: "solid 1px" }}></div>
    </div>
  );
}
