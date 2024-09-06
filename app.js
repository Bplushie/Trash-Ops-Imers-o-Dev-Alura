function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar um tipo de material.<br> Ex: Lâmpada, Pilha, Vidro.</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toUpperCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = ""; 
    let tipo = "";
    let descricao = "";
    let coleta = "";
    let palavraChave = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        titulo = dado.titulo ? dado.titulo.toUpperCase() : ""; 
        tipo = dado.tipo ? dado.tipo.toUpperCase() : ""; 
        descricao = dado.descricao ? dado.descricao.toUpperCase() : "";
        coleta = dado.coleta ? dado.coleta.toUpperCase() : ""; 
        palavraChave = dado.palavraChave ? dado.palavraChave.map(p => p.toUpperCase()).join(" ") : ""; // Convertendo array de palavras-chave para uma string em maiúsculas

        // Verifica se o campo de pesquisa está contido em algum campo
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tipo.includes(campoPesquisa) || palavraChave.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado">
                <h2>
                    ${dado.titulo}
                </h2>
                <p>${dado.descricao}</p>
                <p><strong>local:</strong> ${dado.local}</p>
            </div>
            `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
