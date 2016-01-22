angular.module('myApp',[])
angular.module('myApp')
	.controller('bodyMaster', ['$scope', function($scope){
			$scope.greeting="This is Your Life!";
			$scope.picture= "http://media.tumblr.com/tumblr_me14cz754A1r0zz7o.jpg"
			$scope.hideMe = true;
			$scope.books= new Array;
			$scope.library= new Array;
			$scope.revealForm = function() {
				$scope.hideMe = !$scope.hideMe;
			}

			$scope.picPlacer = function(event){
				$scope.picture= $scope.myPicture
				$scope.myPicture=""
			}

			$scope.namePlacer = function(event){
				$scope.name= $scope.myName
				$scope.myName= ""
			}

			$scope.bioPlacer = function(event){
				$scope.about= $scope.myAbout
				$scope.myAbout=""
			}

			$scope.bookPlacer = function(event){
				$scope.books.push($scope.myBooks)
				$scope.myBooks=""
			}

			$scope.libraryPlacer = function(event){
				$scope.library.push($scope.myLibrary)
				$scope.myLibrary=""
			}
}])