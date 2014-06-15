/**
 * Created by hbakthavatchalu on 6/12/2014.
 */

var app=angular.module("emailParser",[]);

/**
 * @description
 * Access the interpolate provider and set the start and end symbol for velocity style.
 *
*/
var provider=app.config(["$interpolateProvider", function ($interpolateProvider) {
    $interpolateProvider.startSymbol("[");
    $interpolateProvider.endSymbol("]");
}]);

/**
 * @description
 * Create a factory called EmailParser and create a function to interpolate the text.
 * This is the same interpolate code done in interpolation.js file
 */

provider.factory('EmailParser',["$interpolate",function($interpolate){
// a service to handle parsing
    return{
        parse: function(text,context){
            console.log('In parse '+text+" "+context);
            var template=$interpolate(text);
            return template(context);
        }
    }
}]);

/**
 * @description
 * Create the final parser module and insert the emailParser module.
 * @type {module}
 */

var emailParserModule=angular.module("emailParserModule",["emailParser"]);

/**
 * @description
 * Create the controller and pass the scope and the EmailParser factory created in the emailParser module.
 * Use the parse method in the factory to interpolate and create the email template.
 */

emailParserModule.controller("EmailParserController",["$scope","EmailParser",function($scope,EmailParser){

    // Set up a watch
    $scope.$watch("emailBody2",function(body){
        if(body){
            $scope.previewText2=EmailParser.parse(body,{
                to: $scope.toRecipient
            });
        }
    });
}]);