export function Title(props) {
  const GRADE = ["一年", "二年", "三年", "四年", "五年", "六年"];
  const TITLE = ["かん字プリント", "かん字プリント", "漢字プリント", "漢字プリント", "漢字プリント", "漢字プリント"];
  const { size, grade } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "spaceAround",
        width: `${size}cm`,
        fontSize: "1.5rem",
      }}
    >
      <div>{GRADE[grade - 1]}　</div>
      <div>{TITLE[grade - 1]}　</div>
      <div>{"ページ"}</div>
      <div>{"　　　月　　　　日　　　"}</div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <div style={{ flex: "1" }}></div>
          <div>名</div>
          <div style={{ flex: "2" }}></div>
          <div>前</div>
          <div style={{ flex: "1" }}></div>
        </div>

        <div style={{ marginTop: ".1cm", marginRight: "2mm", width: `${size - 0.2}cm`, height: `${size * 5.5}cm`, border: "solid 2px #333" }}></div>
      </div>
    </div>
  );
}
