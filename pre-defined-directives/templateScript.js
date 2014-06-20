/**
 * Created by Harish on 6/19/2014.
 */

var app=angular.module("templateApp",[]);

app.controller("templateController",function($scope){
    $scope.model={
      someProperty: 'testProperty'
    };
});
