var config = {
    apiKey: "AIzaSyDh0TzclxoPs8X87bvTTxCawF5ejj2Soyw",
    authDomain: "cs4220-example-2831b.firebaseapp.com",
    databaseURL: "https://cs4220-example-2831b.firebaseio.com",
    projectId: "cs4220-example-2831b",
    storageBucket: "cs4220-example-2831b.appspot.com",
    messagingSenderId: "28674390352"
  };
  firebase.initializeApp(config);

angular.module('fbApp', ['firebase', 'angularMoment'])
    .controller('AuthController', ['$scope', '$firebaseAuth', function ($scope, $firebaseAuth) {

        var auth = $firebaseAuth()

        // login with Google
        $scope.login = function () {
            auth.$signInWithPopup("google").then(function (firebaseUser) {
                $scope.currentUser = firebaseUser
                console.log("Signed in as:", firebaseUser)
            }).catch(function (error) {
                $scope.error = error
                console.log("Authentication failed:", error)
            })
        }

        // logout
        $scope.logout = function () {
            firebase.auth().signOut().then(function () {
                $scope.currentUser = null
                console.log('Signed Out');
                $scope.$apply()
            }, function (error) {
                $scope.error = error
                console.error('Sign Out Error', error);
            })
        }



    }])
