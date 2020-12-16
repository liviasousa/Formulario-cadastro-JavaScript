var pessoas, index;

function cadPessoa(nome, email, cpf, telefone, cep, logradouro, numero, bairro, cidade, estado) {
    pessoas = document.getElementById("tbPessoas");    
    var qtdlLinhas = pessoas.rows.length;
    var linha = pessoas.insertRow(qtdlLinhas);
    varlinhaParam;

    var cellCodigo = linha.insertCell(0);
    var cellNome = linha.insertCell(1);
    var cellEmail = linha.insertCell(2);
    var cellCpf = linha.insertCell(3);
    var cellTelefone = linha.insertCell(4);
    var cellCep = linha.insertCell(5);
    var cellLogradouro = linha.insertCell(6);
    var cellNumero = linha.insertCell(7);
    var cellBairro = linha.insertCell (8);
    var cellCidade = linha.insertCell(9);
    var cellEstado = linha.insertCell(10);

    cellCodigo.innerHTML = qtdlLinhas;
    cellNome.innerHTML = nome;
    cellEmail.innerHTML = email;
    cellCpf.innerHTML = cpf;
    cellTelefone.innerHTML = telefone;
    cellCep.innerHTML = cep;
    cellLogradouro.innerHTML = logradouro;
    cellNumero.innerHTML = numero;
    cellBairro.innerHTML = bairro;
    cellCidade.innerHTML = cidade;
    cellEstado.innerHTML = estado;

    preencheCamposForm();

}

function altPessoa(nome, email, cpf, telefone, cep, logradouro, numero, bairro, cidade, estado) {

    pessoas.rows[index].cells[1].innerHTML = nome;
    pessoas.rows[index].cells[2].innerHTML = email;
    pessoas.rows[index].cells[3].innerHTML = cpf;
    pessoas.rows[index].cells[4].innerHTML = telefone;
    pessoas.rows[index].cells[5].innerHTML = cep;
    pessoas.rows[index].cells[6].innerHTML = logradouro;
    pessoas.rows[index].cells[7].innerHTML = numero;
    pessoas.rows[index].cells[8].innerHTML = bairro;
    pessoas.rows[index].cells[9].innerHTML = cidade;
    pessoas.rows[index].cells[10].innerHTML = estado;

}

function preencheCamposForm() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        pessoas.rows[i].onclick = function() 
        {
            index = this.rowIndex;
            document.getElementById("txtCodigo").value = pessoas.rows[index].cells[0].innerText;
            document.getElementById("txtNome").value = pessoas.rows[index].cells[1].innerText;
            document.getElementById("txtEmail").value = pessoas.rows[index].cells[2].innerText;
            document.getElementById("txtCpf").value = pessoas.rows[index].cells[3].innerText;
            document.getElementById("txtTelefone").value = pessoas.rows[index].cells[4].innerText;
            document.getElementById("txtCep").value = pessoas.rows[index].cells[5].innerText;
            document.getElementById("txtLogradouro").value = pessoas.rows[index].cells[6].innerText;
            document.getElementById("txtNumero").value = pessoas.rows[index].cells[7].innerText;
            document.getElementById("txtBairro").value = pessoas.rows[index].cells[8].innerText;
            document.getElementById("txtCidade").value = pessoas.rows[index].cells[9].innerText;
            document.getElementById("slEstado").value = pessoas.rows[index].cells[10].innerText;
        }
    }
}

function delRegistro() {

    for(var i = 0; i < pessoas.rows.length; i++) 
    {
        if (index == i) {
            pessoas.deleteRow(index);
            return;
        }
    }
}