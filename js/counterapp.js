/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

var counterApp = angular.module("counterApp", []);

counterApp.controller("CounterController", function ($scope) {
    $scope.counter = 0;

    $scope.add = function (amount) {
        $scope.counter += amount;
    }

    $scope.subtract = function (amount) {
        $scope.counter -= amount;
    }

});

