walletApp.controller('resetController', function($scope) {

    $scope.currency = [{
                        "name": "pound",
                        "symbol": "pound"
                        }, {
                        "name": "dollar",
                        "symbol": "dollar"
                        }, {
                        "name": "euro",
                        "symbol": "euro"
                        }];

    $scope.currencySelection = $scope.currency[0]; // this line initializes the drop down menu
});