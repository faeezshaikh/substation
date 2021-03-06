
angular.module('starter', ['ionic', 'starter.controllers','timer','LocalStorageModule','ngCordova','ngMap'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  
  .state('app.search', {
      url: '/search',
      views: {
        'menuContent': {
          templateUrl: 'templates/search.html'
        }
      }
    })
     .state('app.share', {
      url: '/share',
      views: {
        'menuContent': {
          templateUrl: 'templates/share.html'
        }
      }
    })
    .state('app.districts', {
      url: '/districts',
      views: {
        'menuContent': {
          templateUrl: 'templates/districts.html'
        }
      }
    })
.state('app.favorites', {
      url: '/favorites',
      views: {
        'menuContent': {
          templateUrl: 'templates/favorites.html'
        }
      }
    })
    .state('app.pdf', {
      url: '/pdf',
      views: {
        'menuContent': {
          templateUrl: 'templates/pdf.html'
        }
      }
    })
    .state('app.map', {
      url: '/map',
      views: {
        'menuContent': {
          templateUrl: 'templates/map.html'
        }
      }
    })
    .state('app.single', {
      url: '/substations/:substationId',
      views: {
        'menuContent': {
          templateUrl: 'templates/district.html',
          controller: 'AppCtrl'
        }
      }
    })
  .state('app.substations', {
    url: '/districts/:districtId',
    views: {
      'menuContent': {
        templateUrl: 'templates/substations.html',
        controller: 'AppCtrl'
       }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/districts');
});
