angular.module('userProfiles')
.controller('profileCtrl', function( $scope, friendService ) {
  friendService.getFriends().then( response => {
    $scope.currentUser = response.data.currentUser;
    $scope.friends = response.data.friends;
  });
});
