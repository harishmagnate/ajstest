/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

var app= angular.module("inheritanceModule",[]);

app.controller("ParentController",function($scope){
    $scope.person={
        greeted: false
    }
});

app.controller("ChildController",function($scope){
    $scope.sayHello=function(){
        $scope.person.name="Harish";
        $scope.person.greeted=true;
    }
});
