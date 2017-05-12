'use strict';

angular.module('carton.controllers')
	.controller('ContactCtrl', [ '$rootScope', '$scope', '$window', '$timeout', 'NgMap', 'Strings', function( $rootScope, $scope, $window, $timeout, NgMap, Strings ) {
		
		$scope.$on( '$viewContentLoaded', function(){
			
			NgMap.getMap({id:'ngmap2'}).then(function(map){
				$scope.map = map;
				google.maps.event.trigger(map, 'resize');
				map.setCenter({lat:parseFloat($rootScope.Strings.contact.map.latitude), lng:parseFloat($rootScope.Strings.contact.map.longitude) });
				if( $window.innerWidth >= 768 ){
					map.showInfoWindow('foo2', 'marker2');
				}
			});

			jQuery('#menu li').removeClass('active');
			jQuery('li[name="contact"]').addClass('active');

			var p = jQuery('a.navbar-brand img').position();
			jQuery('form').css({left:p.left});

			jQuery($window).resize(function(){
				var p = jQuery('a.navbar-brand img').position();
				jQuery('form').css({left:p.left});
			});

			if( $window.innerWidth >= 768 ){
				
				$timeout(function(){
					jQuery('#ngmap2').css({height:$window.innerHeight-jQuery('nav.navbar').innerHeight()});
				},200);

				jQuery($window).resize(function(){
					jQuery('#ngmap2').css({height:$window.innerHeight-jQuery('nav.navbar').innerHeight()});
				});
			} else{
				jQuery('#ngmap2').css({height:300});
			}
			
			jQuery('#carousel-home').carousel();

			jQuery('form').on( 'submit', function(e){
				e.stopPropagation();
				e.preventDefault();
				var html = jQuery('#submit').html();
				jQuery('#submit').html('<span class="fa fa-spin fa-refresh"></span> Enviando Mensagem...');
				jQuery.ajax({
					url: '../mail.php?model=' + Strings.data.global.model,
					method: 'POST',
					dataType: 'json',
					data: jQuery('form').serialize(),
					success: function( data ){
						jQuery('#submit').html(html);
						jQuery('form').trigger('reset');
						jQuery('.alert').text(Strings.data.contact.form.message.success).removeClass().addClass('alert alert-success').fadeIn();
						$timeout(function(){
							jQuery('.alert').fadeOut();
						},5000);
					},
					error: function( data ){
						jQuery('#submit').html(html);
						jQuery('.alert').text(Strings.data.contact.form.message.error).removeClass().addClass('alert alert-danger').fadeIn();
						$timeout(function(){
							jQuery('.alert').fadeOut();
						},5000);
					}
				})
			});
			
		});

	}]);