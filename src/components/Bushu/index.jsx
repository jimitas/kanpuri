export function Bushu(props) {
  const Size = props.size;
  return (
    <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
    <small>部首・部首名</small>
    <div style={{ width: `${Size*1.5}cm`, height: `${Size}cm`, border: "solid 1px" }}></div>
  </div>
  );
}
