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

    $scope.cities=[
        {name:'Seattle'},
        {name:'Chennai'},
        {name:'Massachusetts'},
        {name:'Chicago'},
        {name:'New York'},
        {name:'Washington D.C'},
        {name:'Dallas'},
        {name:'San Francisco'},
        {name:'San Jose'}
    ];

    $scope.equation={};

    $scope.changeIt=function(){
        $scope.equation.output=Number($scope.equation.x)+2;
    }

    $scope.generatedNumber = function() {
        return Math.floor((Math.random() * 10) + 1);
    }

});

app.controller("CounterController",function($scope){
    $scope.decrement=function(){
    $scope.count=$scope.count-1;
    };
});