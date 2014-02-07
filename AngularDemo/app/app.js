var app = angular.module("AngularDemoModule", ['ui.router']);


//#region 
//configure the app, incuding the ui router        
app.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state("home", {
            url: "/home",
            templateUrl: "templates/home.html"
        })
        .state("list", {
            url: "/list",
            templateUrl: "templates/list.html",
            controller: "ListDemoController"
        })
    .state("list.item", {
        url: "/:item",
        templateurl: "templates/listitem.html",
        controller: function ($scope, $stateParams) {
            $scope.item = $stateParams.item;
        }
    });
}]);
//#endregion