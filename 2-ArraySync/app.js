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
      .controller('SyncController', ['$scope', '$firebaseArray', function ($scope, $firebaseArray) {

          let ref = firebase.database().ref().child("guestbook")

          $scope.posts = $firebaseArray(ref)

          $scope.addPost = function(){
              $scope.posts.$add({
                  message: $scope.message,
                  date: new Date().toUTCString()
              })
              $scope.message = ''
          }
          $scope.removePost = function(id) {
            $scope.posts.$remove(id)
          }

      }])
