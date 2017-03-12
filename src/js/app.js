require("angular");
require("angular-ui-router");
 
  
 
 
 var app = angular.module('app', ['appConfig']);

angular.module('appConfig', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state("home", {
      url: '/home',
      templateUrl: 'home.html',
      controller: 'HomeController'
    }) 

    .state("news", {
      url: '/home/:newsId', 
      templateUrl: 'news.html',
      controller: 'NewsController'
    }) 
	.state('about', {
        url:'/about',
        templateUrl: 'about.html',
		controller: 'AboutController'
      });
    $urlRouterProvider.otherwise('/home');
});

app.controller('HomeController', function($scope, $state , $http  ) {
	
	
	 $http.get('https://newsapi.org/v1/sources?language=en').then(function(response) {
     
	 $scope.newsChannel = response.data ; 

  }, function(response) {
    console.log('Request failed');
  });
	
 
$scope.fetchSources = function(id,name ) {
  $state.go('news', {'newsId': id });
  
   
};
 
  
});

app.controller('AboutController', function($scope, $state   ) {
	
 
  
});

app.controller('NewsController', function($scope ,$stateParams, $http  ) {
 
  $scope.header = $stateParams.newsId;
 
  $scope.newsDescription = 'Loading the description...';
  $http.get( 'http://newsapi.org/v1/articles?source='+$stateParams.newsId+'&sortBy=top&apiKey=c2dbb5dbfc8b47f9a18f8326ba1f656d').then(function(response) {
     
	 $scope.newsDescription = response.data.articles ; 
	 
  }, function(response) {
    console.log('Request failed');
  });
  
});

