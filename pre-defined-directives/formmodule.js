/**
 * Created by hbakthavatchalu on 6/20/2014.
 */

var app=angular.module("NgFormApp",[]);

app.controller("NgFormController",function($scope){
    $scope.fields=[
        {placeholder:'Enter your username', isRequired: true},
        {placeholder:'Enter your password', isRequired: true},
        {placeholder:'Enter your email', isRequired: false}
    ];

    $scope.person={
        name: null
    };


    $scope.submitForm=function(){
        alert('It works');
    };

    $scope.people = [];
    $scope.submit=function(){
        if($scope.person.name){
            $scope.people.push({name: $scope.person.name});
            $scope.person.name=''; // Otherwise the text field will not become empty
        }
    };

});