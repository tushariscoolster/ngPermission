'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.version',
    'ngPermission'
]).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/view2', {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
    }).when('/view1', {
        templateUrl: 'view1/view1.html',
        controller: 'View1Ctrl',
        authorizedRole: ['admin']
    });
    $routeProvider.otherwise({
        redirectTo: '/view1'
    });
}]).controller('View1Ctrl', [function () {}]).controller('View2Ctrl', [function () {

}]).run(['$rootScope', '$http', '$route', function ($rootScope, $http, $route) {

    $rootScope.$on('ngPermission', function (event,roles, defer) {
        //alert("inn")
        console.log(roles)
        defer.resolve();
            // do what you want to do
    });
}]);