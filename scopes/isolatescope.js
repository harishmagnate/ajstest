/**
 * Created by hbakthavatchalu on 6/23/2014.
 */

var app=angular.module("scopeApp1",[]);

app.controller('MainController', function($scope) {});

app.directive("myScopeDir",function(){
    return{
        restrict: 'A',
        replace: true,
        scope: {},
        template: '<div>Inside myScopeDirac {{myProperty}}</div>'
    };
});

app.directive("myScopeDir1",function(){
    return{
        restrict: 'A',
        replace: true,
        scope: true,
        template: '<div>Inside inherited myScopeDirac {{myProperty}}</div>'
    };
});