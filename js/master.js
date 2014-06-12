/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

/**
 * @description
 * Always create a master directive to hold other directives
 * if you intend to use multiple directives in the same html page.Use the different
 * controllers to invoke the necessary modules.
 */
var myAppModule = angular.module("myAppModule", ["app", "counterApp",
    "personApp","inheritanceModule","parseExpressionModule",
    "interpolationApp","emailParserApp"]);