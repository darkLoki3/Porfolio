const Project_Status = ["aprovado", "reprovado", "pendente"] as const
type ProjectStatus = (typeof Project_Status)[number]

const verification = (ProjectProgressStatus: ProjectStatus): void => {
if (Project_Status.includes(ProjectProgressStatus)) {
console.log("contém status")
}
}
