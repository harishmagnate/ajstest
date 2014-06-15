/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

/**
 * @description
 * Always create a master directive to hold other directives
 * if you intend to use multiple directives in the same html page.Use the different
 * controllers to invoke the necessary modules.
 * The first argument is the directive name.
 */
var myAppModule = angular.module("myAppModule", ["myApp", "counterApp",
    "personApp","inheritanceModule","parseExpressionModule",
    "interpolationApp","emailParserModule"]);


var myAppModule2 = angular.module("myAppModule2", ["emailParserModule","filterApp"]);

var myAppModule3 = angular.module("myAppModule3", ["filterApp"]);