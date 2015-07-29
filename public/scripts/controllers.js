// Controllers
'use strict';

app.controller('HomeController', ['$scope', 'socket',
  function ($scope, socket) {
    $scope.title = 'Space';
  }
]);
