var config = {
    apiKey: "AIzaSyDh0TzclxoPs8X87bvTTxCawF5ejj2Soyw",
    authDomain: "cs4220-example-2831b.firebaseapp.com",
    databaseURL: "https://cs4220-example-2831b.firebaseio.com",
    projectId: "cs4220-example-2831b",
    storageBucket: "cs4220-example-2831b.appspot.com",
    messagingSenderId: "28674390352"
  };
  firebase.initializeApp(config);

  angular.module('notesApp',['firebase'])
      .controller('NotesController',['$scope','$firebaseArray',function($scope,$firebaseArray){
        let ref = firebase.database().ref().child('notes')

        $scope.notes = $firebaseArray(ref)

        $scope.currentNote = {}

        $scope.newNote = function() {
          $scope.notes.$add({title:'untitled',body:''})
          console.log('executing'+$scope.currentNote);
        }

        $scope.setCurrentNote = function(note) {
          $scope.currentNote = note
        }

        $scope.saveNote = function() {
          $scope.notes.$save($scope.currentNote)
        }

      }])
