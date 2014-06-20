/**
 * Created by hbakthavatchalu on 6/17/2014.
 */

var app=angular.module("scopeApp",[]);

app.run(function($rootScope){
    $rootScope.rootProperty="root scope";
}).controller("ParenteController",function($scope){
        $scope.parentProperty="parent scope";
    }).controller("ChileController",function($scope){
        $scope.childProperty="child scope";
        $scope.childHasFullAccess=$scope.rootProperty +
            " and " + $scope.parentProperty + " and " + $scope.childProperty;
    });