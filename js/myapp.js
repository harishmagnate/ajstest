/**
 * Created by hbakthavatchalu on 6/10/2014.
 */

var app = angular.module("app", []);

app.controller("MyController", function ($scope) {
    $scope.clock = new Date();

    var updateClock = function () {
        $scope.clock = {
            today: new Date()
        };
    };

    setInterval(function () {
        $scope.$apply(updateClock);
    }, 1000);

    updateClock();
});
