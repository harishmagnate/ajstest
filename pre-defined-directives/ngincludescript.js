/**
 * Created by Harish on 6/19/2014.
 */

var app=angular.module("predefinedApp",[]);

app.controller("PredefinedController",function($scope){
    $scope.people=[
    {name:"Harish", city:"Chennai"},
    {name:'John Doe', city:'Washington DC'},
    {name:'John Smith', city:'Minnesota'},
    {name:'James Anderson', city:'New York'},
    {name:'Neo', city:'Matrix City'},
    {name:'Trinity', city:'Matrix'}
    ];
});