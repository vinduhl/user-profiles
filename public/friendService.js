angular.module('userProfiles')
.service('friendService', function( $http ) {

    const baseUrl = "http://localhost:8080";

    this.login = function( user ) {
      return $http.post(`${ baseUrl }/api/login`, user);
    };

    this.getFriends = function() {
    	return $http.get(`${ baseUrl }/api/profiles`);
    };

});
