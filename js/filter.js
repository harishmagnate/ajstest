/**
 * Created by hbakthavatchalu on 6/12/2014.
 */

/**
 * @description
 * Create the module filterApp
 * @type {module}
 */
var filterApp=angular.module("filterApp",[]);


/**
 * @description
 * Create the controller with $scope, $filter arguments and use $filter(format)(data)
 */
filterApp.controller("FilterTestController",["$scope","$filter",function($scope,$filter){
 $scope.name=$filter("lowercase")("HARIsh");
 $scope.today = new Date();

 $scope.isCapitalized =
        function(str) { return str[0] == str[0].toUpperCase(); }
}
]);