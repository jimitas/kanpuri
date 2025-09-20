export function Yomikata(props) {
  const { size, grade, show } = props;

  return (
    <div style={{ marginInlineStart: `${size * 0.25}cm` }}>
      {grade === 1 ? <div>よみかた</div> : <div>読み方</div>}

      <div
        className="yomikata relative"
        style={{
          width: `${size * 1.5}cm`,
          height: `${size * 2.5}cm`,
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
