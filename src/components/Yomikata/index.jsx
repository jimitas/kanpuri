export function Yomikata(props) {
  const Size = props.size;
  const grade = props.g;
  const show = props.show;

  return (
    <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
      {grade == 1 ? <div>よみかた</div> : <div>読み方</div>}

      <div
        className="yomikata relative"
        style={{
          width: `${Size}cm`,
          height: `${Size * 3.25}cm`,
        }}
      >
        {show === true ? (
          <div className="yomikata_head">
            <div style={{ flex: "1" }}></div>
            <div>音</div>
            <div style={{ flex: "2" }}></div>
            <div>訓</div>
            <div style={{ flex: "1" }}></div>
          </div>
        ) : null}
        {show === true ? <div className="yLine"></div> : null}
        {show === true ? (
          <div
            style={{
              display: "flex",
              borderInlineStart: "solid 1px",
            }}
          ></div>
        ) : null}
      </div>
    </div>
  );
}
