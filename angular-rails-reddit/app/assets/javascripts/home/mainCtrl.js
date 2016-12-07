angular.module('flapperNews')
.controller("MainCtrl", [
		"$scope",
		"posts",
		function ($scope, posts) {
			$scope.test = "Hello World!";
			$scope.posts = posts.posts

			$scope.addPost = function () {
				if (!$scope.title || $scope.title === "") { return; }
				$scope.posts.push({
					title: $scope.title,
					link: $scope.link,
					upvotes: 0,
					comments: [
						{ author: "David", body: "Cool post!", upvotes: 0 },
						{ author: "Chrisopher", body: "I like it!", upvotes: 0 }
					]
				});
				$scope.title = "";
				$scope.link = "";
			};

			$scope.incrementUpvotes = function (post) {
				post.upvotes += 1;
			};
		}])