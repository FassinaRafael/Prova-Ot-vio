// Adiciona um ouvinte de evento para o formulário de registro
document.getElementById('registroForm').addEventListener('submit', function(e) {
    // Impede o comportamento padrão do formulário (recarregar a página)
    e.preventDefault();

    // Obtém os valores dos campos do formulário
    let nome = document.getElementById('nome').value;
    let matricula = document.getElementById('matricula').value;
    let nota1 = parseFloat(document.getElementById('nota1').value);
    let nota2 = parseFloat(document.getElementById('nota2').value);

    // Verifica se as notas são valores numéricos
    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, insira valores numéricos para as notas.');
        return;
    }

    // Calcula a média das notas e determina a situação do aluno
    let media = (nota1 + nota2) / 2;
    let situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

    // Cria um objeto com os dados do registro
    let registro = {
        nome: nome,
        matricula: matricula,
        nota1: nota1,
        nota2: nota2,
        media: media.toFixed(2), // Arredonda a média para 2 casas decimais
        situacao: situacao
    };

    // Adiciona o registro à tabela
    adicionarRegistro(registro);

    // Limpa os campos do formulário após o envio
    limparFormulario();
});

// Função para adicionar um novo registro à tabela
function adicionarRegistro(registro) {
    // Obtém a referência à tabela e ao corpo da tabela
    let tabela = document.getElementById('tabelaRegistros');
    let tabelaBody = tabela.getElementsByTagName('tbody')[0];

    // Verifica se a tabela já possui um cabeçalho
    let temCabecalho = tabela.getElementsByTagName('thead').length > 0;

    if (!temCabecalho) {
        // Se a tabela não tiver cabeçalho, cria uma nova linha para o cabeçalho e adiciona as colunas
        let headerRow = tabela.createTHead().insertRow();
        headerRow.innerText = `
            <tr>
                <th>Nome</th>
                <th>Matrícula</th>
                <th>Nota 1</th>
                <th>Nota 2</th>
                <th>Média</th>
                <th>Situação</th>
            </tr>
        `;
    }

   // Adiciona os dados do registro como uma nova linha na tabela
let novaLinha = tabelaBody.insertRow();

// Define os dados a serem exibidos na nova linha
let data = [registro.nome, registro.matricula, registro.nota1, registro.nota2, registro.media, registro.situacao];

// Itera sobre os dados e preenche as células da nova linha
for (let i = 0; i < data.length; i++) {
    let celula = novaLinha.insertCell(i);
    celula.innerText = data[i];
}

}

// Função para limpar os campos do formulário
function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}
