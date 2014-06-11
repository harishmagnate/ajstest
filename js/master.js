/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

/**
 * Always create a master directive to hold other directives
 * if you intend to use multiple directives in the same html
 */
var myAppModule = angular.module("myAppModule", ["app", "counterApp", "personApp","inheritanceModule"]);