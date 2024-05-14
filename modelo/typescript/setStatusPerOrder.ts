setStatusPerOrder(status: number): string {
    const typeStatus = {
        0: "Erro (Error)",
        1: "Pendente (Pending)",
        2: "Andamento (In Progress)",
        3: "Sucesso (Success)",
    };

    return typeStatus[status] || "-";

}
