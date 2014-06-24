/**
 * Created by hbakthavatchalu on 6/24/2014.
 */

var app=angular.module("testApiApp",[]);

app.directive("ensureUnique1",function($http){
    return{
        require: 'ngModel',
        link: function(scope,attr,element, c,log){
           scope.$watch(attr.ngModel,function(){
               $http({
                   method: 'GET',
                   url: 'http://localhost:8082/ajs/check/userName/'+attr.ensureUnique,
                   data: {'field':attr.ensureUnique}
               }).success(function(data,status,header,cfg,log){
                   log.info('Data:'+data);
                   if(data==='true')
                   c.$setValidity('unique',true);
                   else
                       c.$setValidity('unique',false);
               }).error(function(data,status,header,cfg){
                   c.$setValidity('unique',false);
               })
           });
        }
    }
});