const MyComponentCorrect = () => {
  const itens = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
    {itens.map((item, index) => <div key={index}>{item}</div>)}
    </div>
    );
}