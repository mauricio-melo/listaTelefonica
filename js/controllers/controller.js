app.controller("listaTelefonicaController", ['$scope', 'listaModel', function ($scope, listaModel) {
    $scope.title = "Lista Telefonica";
    $scope.contatos = listaModel.getLista(); 
    $scope.campos = listaModel.getCampos($scope.contatos[0]);
    $scope.cadastro = {};

    $scope.adicionarContato = function (cadastro) {      
        $scope.contatos = listaModel.adicionarContato(cadastro, $scope.campos, $scope.contatos);
        limparFormulario();
    }

    const limparFormulario = function (){
        $scope.cadastro = {};
    }
}])