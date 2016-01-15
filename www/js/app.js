// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var exampleApp = angular.module('starter', ['ionic','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


exampleApp.controller("ExampleController", function($scope, $cordovaBarcodeScanner, $http) {

$scope.result = {
  text : 'empty',
  format: 'empty'
}

$scope.scanBarCode = function(){
  console.log('hey');
  document.addEventListener("deviceready", function () {

    $cordovaBarcodeScanner
    .scan()
    .then(function(barcodeData) {
      // Success! Barcode data is here
      $scope.result = barcodeData;
      console.log(barcodeData);
    }, function(error) {
      // An error occurred
      console.log(error);
    });

  }, false);
}


});
