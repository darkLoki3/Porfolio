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
> This code map the project...
```typescript

```
