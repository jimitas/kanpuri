export function Yomikata(props) {
  const Size = props.size;
  const grade = props.g;

  return (
    <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
      <div>読み方</div>
      <div
        className="yomikata relative"
        style={{
          width: `${Size}cm`,
          height: `${Size * 3.25}cm`,
        }}
      >
        <div className="yLine"></div>

        <div className="yomikata_head">
          <div style={{ flex: "1" }}></div>
          <div>音</div>
          <div style={{ flex: "2" }}></div>
          <div>訓</div>
          <div style={{ flex: "1" }}></div>
        </div>
        <div
          className="yomikagta_data"
          style={{
            display: "flex",
            borderInlineStart: "solid 1px",
          }}
        ></div>
      </div>
    </div>
  );
}
