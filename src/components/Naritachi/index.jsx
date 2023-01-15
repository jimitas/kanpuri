export function Naritachi(props) {
  const Size = props.size;
  return (
    <section>
      <div>○漢字の成り立ちを調べましょう。</div>
      <div
        style={{
          width: `${Size}cm`,
          height: `${Size * 7}cm`,
          border:"1px solid"
        }}
      >
      </div>
    </section>
  );
}
