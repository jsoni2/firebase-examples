var config = {
    apiKey: "AIzaSyDh0TzclxoPs8X87bvTTxCawF5ejj2Soyw",
    authDomain: "cs4220-example-2831b.firebaseapp.com",
    databaseURL: "https://cs4220-example-2831b.firebaseio.com",
    projectId: "cs4220-example-2831b",
    storageBucket: "cs4220-example-2831b.appspot.com",
    messagingSenderId: "28674390352"
  };
  firebase.initializeApp(config);

  angular.module('fbApp', ['firebase'])
    .controller('SyncController', ['$scope', '$firebaseObject', function ($scope, $firebaseObject) {

        let ref = firebase.database().ref().child("syncDemoData")

        $scope.data = $firebaseObject(ref)



        // download the data into a local object
        let syncObject = $firebaseObject(ref);

        // synchronize the object with a three-way data binding
        syncObject.$bindTo($scope, "threeWayData")

    }])
