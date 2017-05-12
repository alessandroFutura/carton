'use strict';

angular.module('carton.controllers')
	.controller('ServicesCtrl', [ '$scope', '$window', '$timeout', function( $scope, $window, $timeout ) {	
		
		$scope.$on( '$viewContentLoaded', function(){

			jQuery('#menu li').removeClass('active');
			jQuery('li[name="services"]').addClass('active');

			$timeout(function(){
				jQuery('.item').each(function(){
					$(this).find('.image').css({height:$(this).innerHeight()});
				});
			},200);

			jQuery($window).resize(function(){
				jQuery('.item').each(function(){
					$(this).find('.image').css({height:$(this).innerHeight()});
				});
			});

		});

	}]);