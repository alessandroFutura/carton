'use strict';

angular.module('carton.controllers')
	.controller('AboutCtrl', [ '$scope', '$window', '$timeout', function( $scope, $window, $timeout ) {
		
		$scope.$on( '$viewContentLoaded', function(){

			jQuery('#menu li').removeClass('active');
			jQuery('li[name="about"]').addClass('active');

			//$timeout(function(){
			//	jQuery('#image .image').css({height:jQuery('.text').innerHeight()});
			//},200);

			//jQuery($window).resize(function(){
			//	jQuery('#image .image').css({height:jQuery('.text').innerHeight()});
			//});

		});

	}]);