/**
 * Created by hbakthavatchalu on 6/11/2014.
 * Demonstrates the angular's ability to load objects to scope
 */

var app = angular.module("personApp", []);

app.controller("PersonController", function ($scope) {
    $scope.person = {
        name: "Harish"
    };
});