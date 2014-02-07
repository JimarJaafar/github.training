var app = angular.module("AngularDemoModule", []);
app.controller("AngularDemoController", ["$scope", function ($scope) {
    $scope.people = [];

    $scope.firstName = "";
    $scope.lastName = "";

    $scope.addPerson = function () {
        $scope.people.push({ firstName: $scope.firstName, lastName: $scope.lastName });
    }
}]);
