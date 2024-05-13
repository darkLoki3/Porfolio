# Modelo
> Here will be upload some typescripts codes

## [map_typescript](/map_typescript.ts)
> Map the correct component
```typescript
const MyComponentCorrect = () => {
  const itens = ["Item 1", "Item 2", "Item 3"];
  return (
    <div>
    {itens.map((item, index) => <div key={index}>{item}</div>)}
    </div>
    );
}
```

## [modelo](/modelo1.ts)
> Show status bar
```typescript
const Project_Status = ["aprovado", "reprovado", "pendente"] as const
type ProjectStatus = (typeof Project_Status)[number]

const verification = (ProjectProgressStatus: ProjectStatus): void => {
if (Project_Status.includes(ProjectProgressStatus)) {
console.log("contém status")
}
}
```

## [modelo_layout](/modelo_layout.ts)
> layout effect to operations who need DOM
```typescript
// Correct manner
// useLayoutEffect to operations what need disposition DOM
const CorrectComponent = () => {
 const ref = useRef();


  useLayoutEffect(() => {
   if(ref.current) {
      ref.current.style.backgroundColor = "blue";
}
}, []);
  return <div ref={ref}>example test</div>;
};
```

## [Status per order](/statusperorder.ts)
> How to minimize if use
```typescript
```
