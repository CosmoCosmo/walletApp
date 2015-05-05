walletApp.controller("homeController", function($scope, $localStorage) {
    
    init(); // initialise setup data
    
    function init() {
        $scope.totals = $localStorage.message || [];
        $scope.grandTotal = 0;
        $scope.myData = $scope.totals;
        $scope.gridOptions = {
            data: 'myData',
            columnDefs: [{
                field: 'Date',
                displayName: 'Date'
            }, {
                field: 'Amount',
                displayName: 'Amount'
            }]
        };
        //get the last Total value
        if ($scope.totals.length >= 1) {
            $scope.grandTotal = $scope.totals[$scope.totals.length - 1]['Total'];
        }
    }

    function saveResult(total) {
        $scope.totals.push({
            'Date': (new Date()).toString(),
            'Amount': $scope.amount,
            'Total': total
        });
        $localStorage.message = $scope.totals;
    }
    
    $scope.addTotal = function() {
        $scope.grandTotal = $scope.grandTotal + $scope.amount;
        saveResult($scope.grandTotal);
    };
    
    $scope.subractTotal = function() {
        if ($scope.grandTotal - $scope.amount >= 0) {
            $scope.grandTotal = $scope.grandTotal - $scope.amount;
            saveResult($scope.grandTotal);
        } else {
            //$( "#usermessage" ).html( "<span class='notvalidnumber'> Grand Total cannot be negative!</span>" );
            alert("negative result");   //#todo need to remove and show message in application instead of alert
        }
    };
    
    $scope.clearTotal = function() {
        $scope.totals.length = 0; // empty array
        $scope.amount = '';
        $scope.grandTotal = 0;
    };
});