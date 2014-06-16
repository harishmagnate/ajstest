/**
 * Created by hbakthavatchalu on 6/16/2014.
 */

var app=angular.module("formApp",[]);

app.directive('ensureUnique', function($http) {
     return {
         require: 'ngModel',
         link: function(scope, ele, attrs, c) {
         scope.$watch(attrs.ngModel, function(n) {
             if (!n) return;
             $http({
                 method: 'POST',
                 url: '/api/check/'+attrs.ensureUnique,
                 data: {'field': attrs.ensureUnique}
             }).success(function(data) {
             c.$setValidity('unique', data.isUnique);
             }).error(function(data) {
             c.$setValidity('unique', false);
             });
         });
     }
 }
});


app.controller('SignupController',
     function($scope) {
     $scope.submitted = false;
     $scope.signupForm = function() {
    if ($scope.signup_form.$valid) {
             // Submit as normal
             } else {
             $scope.signup_form.submitted = true;
             }
         }
     });