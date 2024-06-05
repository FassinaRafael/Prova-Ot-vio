document.getElementById('registroForm').addEventListener('submit', function(e) {
    e.preventDefault();

    var nome = document.getElementById('nome').value;
    var matricula = document.getElementById('matricula').value;
    var nota1 = parseFloat(document.getElementById('nota1').value);
    var nota2 = parseFloat(document.getElementById('nota2').value);

    if (isNaN(nota1) || isNaN(nota2)) {
        alert('Por favor, insira valores numéricos para as notas.');
        return;
    }

    var media = (nota1 + nota2) / 2;
    var situacao = media >= 5 ? 'Aprovado' : 'Reprovado';

    var registro = {
        nome: nome,
        matricula: matricula,
        nota1: nota1,
        nota2: nota2,
        media: media.toFixed(2),
        situacao: situacao
    };

    adicionarRegistro(registro);
    limparFormulario();
});

function adicionarRegistro(registro) {
    var tabela = document.getElementById('tabelaRegistros');
    var tabelaBody = tabela.getElementsByTagName('tbody')[0];

    // Verifica se a tabela já contém cabeçalho
    var hasHeader = tabela.getElementsByTagName('thead').length > 0;

    if (!hasHeader) {
        // Se a tabela não tiver cabeçalho, adiciona as colunas
        var headerRow = tabela.createTHead().insertRow();
        headerRow.innerHTML = `
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
    var newRow = tabelaBody.insertRow();
    var cellNome = newRow.insertCell(0);
    var cellMatricula = newRow.insertCell(1);
    var cellNota1 = newRow.insertCell(2);
    var cellNota2 = newRow.insertCell(3);
    var cellMedia = newRow.insertCell(4);
    var cellSituacao = newRow.insertCell(5);

    cellNome.innerHTML = registro.nome;
    cellMatricula.innerHTML = registro.matricula;
    cellNota1.innerHTML = registro.nota1;
    cellNota2.innerHTML = registro.nota2;
    cellMedia.innerHTML = registro.media;
    cellSituacao.innerHTML = registro.situacao;
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('matricula').value = '';
    document.getElementById('nota1').value = '';
    document.getElementById('nota2').value = '';
}
