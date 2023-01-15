export function First(props) {
  const GRADE = ["一年", "二年", "三年", "四年", "五年", "六年"];
  const TITLE = ["かん字プリント", "かん字プリント", "漢字プリント", "漢字プリント", "漢字プリント", "漢字プリント"];
  const Size = props.size;
  return (
    <section style={{ display: "flex" }}>
    <div
      className="masu relative"
      style={{
        marginBlockStart: `${Size * 0.25}cm`,
        width: `${Size}cm`,
        height: `${Size}cm`,
      }}
    >
      <div className="xLine"></div>
      <div className="yLine"></div>
    </div>

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

    <div style={{ marginInlineStart: `${Size * 0.25}cm` }}>
      <small>部首・部首名</small>
      <div style={{ width: `${Size}cm`, height: `${Size}cm`, border: "solid 1px" }}></div>
    </div>

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
  </section>
  );
}
