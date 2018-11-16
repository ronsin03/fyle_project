'use strict';

angular.module('myApp', [])
  .controller('movieCntrl', function($scope, $http){
    var searchNew;
    var searchNewClick;

    $scope.searchMovie = function(){
      
      searchNew = setTimeout(fetch, 1000);
    };

    $scope.searchMovieClick = function(){
      setTimeout(fetchClick, 1000);
    };

    function fetchClick() {
      $http.get("https://www.omdbapi.com/?t=99bd90ae" + $scope.search + "&plot=full")
       .success(function(response){ $scope.details = response; });

       $http.get("https://www.omdbapi.com/?s=99bd90ae" + $scope.search + "&type=movie")
       .success(function(response){  $scope.results = response; });
    }

    function fetch() {
      $http.get("https://www.omdbapi.com/?s=99bd90ae" + $scope.search + "&type=movie")
       .success(function(response){  $scope.results = response; });
    }

    $scope.showMovie = function(movie) {
      $scope.search = movie.Title;
      $scope.searchMovieClick();
    }
  });
