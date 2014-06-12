/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

var exprModule=angular.module("parseExpressionModule",[]);

exprModule.controller("ParseExprController",["$scope", "$parse",function($scope, $parse){

    $scope.$watch("expr",function(newVal, oldVal, scope){
        if(newVal!=oldVal){
            console.log(scope+'::'+oldVal+'::'+newVal);
            // Let's set up our parseFun with the expression
           var parseFun=$parse(scope);
            // Get the value of the parsed expression
            $scope.parsedValue=parseFun(newVal);
            console.log('1'+$parse(scope));
            console.log('2'+$parse(newVal)(scope));
            console.log('3'+$scope.parsedValue);
        }
    })
}]);

