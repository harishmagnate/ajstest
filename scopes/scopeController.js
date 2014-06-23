/**
 * Created by hbakthavatchalu on 6/20/2014.
 */

var app=angular.module("scopeApp",[]);

app.controller("SomeController",function($scope){

});

app.controller("SecondController",function($scope){

});

app.directive("myDirective",function(){
    return{
        restrict: 'A',
        scope: true
    }
});

