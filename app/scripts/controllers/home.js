'use strict';

angular.module('carton.controllers')
	.controller('HomeCtrl', [ '$scope', '$window', function( $scope, $window ) {
		
		$scope.$on( '$viewContentLoaded', function(){
			
			jQuery('#menu li').removeClass('active');
			jQuery('li[name="home"]').addClass('active');

			$scope.itemImageHeight = $window.innerHeight-jQuery('nav.navbar').innerHeight();
			
			jQuery($window).resize(function(){
				$scope.itemImageHeight = $window.innerHeight-jQuery('nav.navbar').innerHeight();
			});
			
			jQuery('#carousel-home').carousel();

			jQuery($window).scroll(function(){
				
				if( jQuery(this).scrollTop() > 0 ){
					jQuery('#see-more').fadeOut();
				} else{
					jQuery('#see-more').fadeIn();
				}
			});			
			
		});

	}]);