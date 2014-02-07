var app = angular.module("AngularDemoModule", []);

app.controller("ListDemoController", function ($scope) {
    $scope.items = [
        { name: 'jimar' },
        { name: 'jaafar' },
        { name: 'habib' }
    ];
});
