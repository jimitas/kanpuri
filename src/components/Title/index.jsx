export function Title(props) {
  const GRADE = ["一年", "二年", "三年", "四年", "五年", "六年"];
  const TITLE = ["かん字プリント", "かん字プリント", "漢字プリント", "漢字プリント", "漢字プリント", "漢字プリント"];
  const Size = props.size;
  const grade = props.g;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "spaceAround",
        width: `${Size}cm`,
        fontSize: "1.5rem",
      }}
    >
      <div>{GRADE[grade - 1]}</div>
      <div>{TITLE[grade - 1]}</div>
      <div>{"　　　 ページ"}</div>
      <div>{"　　　月　　　　日　　　"}</div>

      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column-reverse" }}>
          <div style={{ flex: "1" }}></div>
          <div>名</div>
          <div style={{ flex: "2" }}></div>
          <div>前</div>
          <div style={{ flex: "1" }}></div>
        </div>

        <div style={{ marginTop: "1cm", width: `${Size}cm`, height: `${Size * 6}cm`, border: "solid 1px #333" }}></div>
      </div>
    </div>
  );
}
