/**
 * Created by hbakthavatchalu on 6/11/2014.
 */

var app=angular.module("interpolationApp",[]);

app.controller("InterpolationController",
    function($scope, $interpolate) {
        $scope.to = 'ari@fullstack.io';
        $scope.persona = 'ari@fullstack.io';
        $scope.emailBody = 'Hello {{ to }},\n\nMy name is Harish too! Thank you for contacting me. \n\n {{ add }}';
        // Set up a watch
        $scope.$watch('emailBody', function(body) {
            if (body) {
                var template = $interpolate(body);
                $scope.previewText =
                    template({to: $scope.to,
                        add: $scope.persona});
            }
        });
    });