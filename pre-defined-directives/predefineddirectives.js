/**
 * Created by hbakthavatchalu on 6/19/2014.
 */

/**
 * @description
 * Module definition.
 * @type {module}
 */

var myApp=angular.module("myApp",[]);

/**
 * @description
 * define the boolean variable within run method on rootscope.
 * Use the timeout predefined function to automatically enable textarea after 5 seconds
 */

myApp.run(function($rootScope,$timeout){
$rootScope.isTextAreaDisabled = true;

    $timeout(function(){
        $rootScope.isTextAreaDisabled = false;
    },5000);

    $timeout(function(){
        $rootScope.getUrl='http://google.com';
        },2000);

    $timeout(function(){
        $rootScope.imgSrc='https://www.google.com/images/srpr/logo11w.png';
    },2000);
});


