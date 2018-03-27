angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mainPage', {
    url: '/mainpage',
    templateUrl: 'templates/mainPage.html',
    controller: 'mainPageCtrl'
  })

  .state('searchResult', {
    url: '/searchresult',
    templateUrl: 'templates/searchResult.html',
    controller: 'searchResultCtrl'
  })

  .state('detailInformation', {
    url: '/detailinformation',
    templateUrl: 'templates/detailInformation.html',
    controller: 'detailInformationCtrl'
  })

$urlRouterProvider.otherwise('/mainpage')


});