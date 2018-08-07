const listaModel = function() {
    const dados = [
        { nome: "Mauricio Melo", telefone: "4545-4545", celular:"98181-9990"},
        { nome: "Gabriella", telefone: "4545-4545", celular:"98181-9990" },
        { nome: "Bibi", telefone: "4545-4545", celular:"98181-9990" },
        { nome: "Gabi", telefone: "4545-4545", celular:"98181-9990" }
    ];

    const getLista = function () {
        return dados;
    }

    const getCampos = function(obj){
        var campos = [];
        for (let prop in obj) {
            campos.push(prop);
        }
        return campos;
    } 

    const adicionarContato = function(cadastro, campos, contatos){
        const pessoa = {};
        for (let prop in campos) {
            pessoa[campos[prop]] =  cadastro[campos[prop]];
        }
        contatos.push(pessoa);
        //$scope.cadastro = {};
        return contatos;
    }

    return {
        getLista,
        getCampos,
        adicionarContato
    }
}

app.factory('listaModel', listaModel);
