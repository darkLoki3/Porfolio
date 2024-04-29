# React
> Here will be uploaded some example of codes

## Typescript
> This show a status bar the project have
```typescript
  const Project_Status = ["aprovado", "reprovado", "pendente"] as const
  type ProjectStatus = (typeof Project_Status)[number]

  const verification = (ProjectProgressStatus: ProjectStatus): void => {
    if (Project_Status.includes(ProjectProgressStatus)) {
      console.log("contém status")
    }
  }
```

## map typescript
> This code map the correct component
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
