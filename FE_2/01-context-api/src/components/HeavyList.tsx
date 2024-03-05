function HeavyList() {
  console.log("HeavyList (리)렌더링 되었어요~");
  return (
    <ol>
      {Array(500)
        .fill(true)
        .map((el, index) => (
          <li key={index}>안녕하세요~</li>
        ))}
    </ol>
  );
}

export default HeavyList;
