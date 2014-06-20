/**
 * Created by hbakthavatchalu on 6/17/2014.
 */

/**
 * @description
 * The module for this JS file.
 * @type {module}
 */
var app = angular.module("directiveApp", []);

/**
 * @description
 * The directive on an angular module. The directive must have a function returning
 * the underlying template. The restrict property specifies how the directive
 * shall be handled in html. restrict can be E A C denoting element, attribute or class.
 * A is most supported by browser.
 */

app.directive("myDirective", function () {
        return{
            restrict: 'E',
            template: '<a href="http://google.com">Click me to google</a>'
        }
    }
);

/**
 * @description
 * The replace method replaces the custom directive with the template content
 * instead of wrapping within the custom tag.
 *
 */

app.directive("myDirectiveReplace", function () {
        return{
            restrict: 'E',
            replace: true,
            template: '<a href="http://google.com">Click me to google</a>'
        }
    }
);

/**
 * @description
 * Isolated Scope definition. We can define a scope without inheritance inside a directive.
 * The scope is visibility is restricted to a directive alone. The properties on scope can be
 * defined in the html itself keeping the directive clean. The properties can be referenced by
 *  either @ or @attrName. The @attrName looks for attr-name attribute to map the scope's property
 */

app.directive("directiveIsolatedScope", function () {
    return{
        restrict: 'A',
        replace: true,
        scope: {
            myUrl: '@',
            myText: '@myLinkText'
        },
        template: '<a href="{{myUrl}}">{{myText}}</a>'
    }
});

/**
 * @description
 * The =attrName will bind the data in two direction.
 * someAttr is a ng-model for an input field.
 */
app.directive("directiveTwoWayBind",function(){
    return{
        restrict: 'A',
        replace: true,
        scope:{
            myUrl: '=someAttr',
            myText: '@myLinkText'
        },
        template: '<div>' +
            '<label>My URL Field</label>' +
            '<input type="text" ng-model="myUrl"/>' +
            '<a href="{{myUrl}}">{{myText}}</a>'
    }
});
