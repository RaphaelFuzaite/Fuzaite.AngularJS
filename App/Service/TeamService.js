'use strict';

angular.module('AngularWebApp').service('TeamService', ['$http', '$q', function ($http, $q) {
	
		var Team = function(data) {
			var self = this;

			self.Loading = false;
            self.AlternateGridLoading();
            self.Resources = {
				Url: data.Url,
				Method: 'GET',
				Success: data.Success || function(response){
                    if (angular.isUndefined(response) && angular.isArray(response)) {
                        return false;
                    }
                    self.Data = response;
                },
				Error: data.Error || function(){ }
			};
            
            $http({ 
                method: self.Resources.Method, 
                url: self.Resources.Url 
            })
            .success(self.Resources.Success)
            .error(self.Resources.Error)
            .finally(function() {
                self.AlternateGridLoading();
            });
			
			return self;
		};
		
		Team.prototype.AlternateGridLoading = function() {
			this.Loading = !this.Loading;	
		};

		return Team;
	}
]);