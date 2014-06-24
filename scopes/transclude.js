/**
 * Created by hbakthavatchalu on 6/23/2014.
 */

var app=angular.module("transcludeApp",[]);

app.directive("sidebox",function(){
    return{
        restrict: 'A',
        replace: true,
        scope:{
            title: '@'
        },
        transclude:true,
        template:'<div class="sidebox">\
        <div class="content">\
        <h2 class="header">{{ title }}</h2>\
        <span class="content" ng-transclude>\
        </span>\
        </div>\
        </div>'
    };
});


app.directive("link",function(){
return{
    restrict:'EA',
    transclude:true,
    controller:
        function($scope,$element,$transclude,$log){
        $transclude(function(clone){
            var a=angular.element('<a>');
            a.attr('href',clone.text());
            $log.info('Cloned a new element');
            $element.append(a);
        });
        }
}
});
