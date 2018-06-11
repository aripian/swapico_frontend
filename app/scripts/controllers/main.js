'use strict';

angular.module('swapicoFrontendApp')
  .controller('MainCtrl', ['$scope','$filter','$http', function($scope,$filter,$http) {
  	var backUrl = 'https://swapi.co/api/people';
  	$scope.characters = [];
  	$scope.init = function (){
	  $http.get(backUrl,{})
	    .then(function success(response){
	      response.data.results.forEach(function(char){
	      	var charDetails = {};
	      	var filmList = [];
	      	var vehiclesList = [];
	      	var starshipsList = [];

	      	charDetails.name = char.name;
			charDetails.height = char.height;
			charDetails.mass = char.mass;
			charDetails.hair_color = char.hair_color;
			charDetails.skin_color = char.skin_color;
			charDetails.eye_color = char.eye_color;
			charDetails.birth_year = char.birth_year;
			charDetails.gender = char.gender;
			$http.get(char.homeworld)
	      	  .then(function success(res){
	      	    charDetails.homeworld = res.data.name;
	      	  });
	      	char.films.forEach(function(film){
	      	  $http.get(film)
	      	    .then(function success(res){
	      	    	filmList.push(res.data.title);
	      	    });
	      	});
	      	char.species.forEach(function(spec){
	      	  $http.get(spec)
	      	    .then(function success(res){
	      	    	charDetails.species = res.data.name;
	      	    });
	      	});
	      	char.vehicles.forEach(function(veh){
	      	  $http.get(veh)
	      	    .then(function success(res){
	      	    	vehiclesList.push(res.data.name);
	      	    });
	      	});
	      	char.starships.forEach(function(star){
	      	  $http.get(star)
	      	    .then(function success(res){
	      	    	starshipsList.push(res.data.name);
	      	    });
	      	});
	      	charDetails.films = filmList;
	      	charDetails.vehicles = vehiclesList;
	      	charDetails.starships = starshipsList;
	      	$scope.characters.push(charDetails);
	      });
	      console.log($scope.characters);
	    }, function failure(err){
	      console.log(err);
	    });
	};

  }]);
