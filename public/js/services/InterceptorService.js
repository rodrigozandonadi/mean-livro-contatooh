angular.module('contatooh')
	.factory('githubInterceptor', function($location, $q){
		var interceptor = {
			responseError : function(resposta){
				if(resposta.status == 401){
					$location.path('/auth');
				}
				return $q.reject(resposta);
			}

		};
		return interceptor;
	});