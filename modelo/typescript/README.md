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

## [Status per order](/setStatusPerOrder.ts)
> How to minimize if use example was picked from the user Matheus Augusto in Linkedin
```typescript
/** wrong way to do **/
setStatusPerOrder(status: number): string {
    if (status = 0) {
        return "Erro";
    } else if (status = 1) {
        return "Pendente";
    } else if (status = 2) {
        return "Em andamento";
    } else if (status = 3) {
        return "Sucesso";
    } else {
        return "-";
    }
}

/** correct way **/
setStatusPerOrder(status: number): string {
    const typeStatus = {
        0: "Erro (Error)",
        1: "Pendente (Pending)",
        2: "Andamento (In Progress)",
        3: "Sucesso (Success)",
    };

    return typeStatus[status] || "-";

}
```
