'use strict';

angular.module('carton.controllers', [ ]);

angular.module('carton', [
		'ngAnimate',
		'ngRoute',
		'ngSanitize',
		'ngTouch',
		'carton.controllers',
		'externo',
		'ngParallax',
		'ngMap'
	])
	.config(['$locationProvider', function($locationProvider) {
		$locationProvider.hashPrefix('');
	}])
	.config(['$routeProvider', function($routeProvider) {

		$routeProvider
			.when('/', {
				templateUrl: 'views/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'home'
			})
			.when('/a-carton', {
				templateUrl: 'views/about.html',
				controller: 'AboutCtrl',
				controllerAs: 'about'
			})
			.when('/produtos', {
				templateUrl: 'views/services.html',
				controller: 'ServicesCtrl',
				controllerAs: 'service'
			})
			.when('/contato', {
				templateUrl: 'views/contact.html',
				controller: 'ContactCtrl',
				controllerAs: 'contact'
			})
			.otherwise({
				redirectTo: '/'
			});

	}])
	.run(['$rootScope','$window','Strings',function($rootScope,$window,Strings){
		
		$rootScope.Strings = Strings.data;
		
		if( $window.innerWidth < 768 ){
			jQuery('.navbar-nav li a').click(function(){
				jQuery('.navbar-toggle').trigger('click');
			});
		}

		jQuery($window).scroll(function(){
			
			if( jQuery(this).scrollTop() > 160 ){
				jQuery('#back-top').fadeIn();
			} else{
				jQuery('#back-top').fadeOut();
			}
		});

		jQuery('#back-top').click(function () {
			jQuery('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		});

	}]);
