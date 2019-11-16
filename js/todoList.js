// js/todoList.js
'use strict';

/*
* DECLARATION OF THE APP DEMOAPP
*/
var demoApp = angular.module('demoApp', [
	'todoList'
]);

	
/*
* DECLARATION OF THE MODULE TODOLIST
*/
var todoList = angular.module('todoList',[]);


/*
* CONTROLLER OF THE APP TODOLIST
*/
todoList.controller('todoCtrl', ['$scope',
	function ($scope) {
	
	 	$scope.newTodo = '';
	 	$scope.newSubTodo = '';

	 	console.log("coucou todo");

	 	// INITIALIZATION ARRAY OF TODOS
	 	var todos = $scope.todos = [
	 		{
	 			title :  "Todo 1",
	 			subTodo : {
	 				0 : {
	 					title : "subTodo 1",
	 				},
	 				1 :{
	 					title : "subTodo 2"
	 				}
	 			}
	 		},
	 		{
	 			title : "Todo 2",
	 			subTodo : {
	 				0 : {
	 					title : "subTodo todo 2-1"
	 				},
	 				1 :{
	 					title : "subTodo todo 2-2"
	 				}
	 			}
	 		},
	 		{
	 			title : "Todo 3",
	 			subTodo : {
	 				0 : {
	 					title : "subTodo todo 3-1"
	 				},
	 				1 :{
	 					title : "subTodo todo 3-2"
	 				}
	 			}
	 		}
	 	];

	 	/***
	 	    FUNCTION GET ITEM FROM LOCAL STORAGE
		***/
	 	$scope.getItem = function () {
	 		var todosLocal = [];
			for(var i = 0 ; i < localStorage.length ; i++) {
				if("list"+[i] in localStorage)
   					todosLocal.push(JSON.parse(localStorage.getItem("list"+[i])));
			}
			$scope.todos = todosLocal;
	 	}

	 	/***
	 	    FUNCTION GET ITEM FROM LOCAL STORAGE
		***/
	 	$scope.setItem = function ()
	 	{
			for(var i = 0 ; i < $scope.todos.length ; i++) 
				localStorage.setItem("list"+[i],JSON.stringify($scope.todos[i]));
 		}


		// CHECK IF LOCALSTORAGE EXISTS
	 	if(localStorage.length > 0 ) 
           	$scope.getItem();
   		else 
            $scope.todos = todos;

		
		/***
			FUNCTION DISPLAY TODOS
		***/
        $scope.showTodo = function (id) {
        	$scope.todo = [];
        	$scope.todo.push($scope.todos[id]);
        }

 		/***
			FUNCTION ADD TODO
		***/
	 	$scope.addTodo = function (todo) {
			// TRIM : REMOVE UNUSEFUL SPACES
	 		var newTodo = $scope.newTodo.trim();
            console.log(newTodo);

			// NONE EMPTY TODO
 			if(!newTodo.length) 
 				return;
			
 			$scope.todos.push({
 				title : newTodo,
 				completed : false
 			});

 			// SET ITEM TO LOCAL STORAGE
 			$scope.setItem();

 			// GET ITEM FROM LOCALSTORAGE
 			$scope.getItem();

 			// Réinitialisation de la variable newTodo
 			$scope.newTodo = '';

 			
	 	};
		
		/***
			FUNCTION ADD ITEM
		***/
	 	$scope.addItem = function (item,todo) {
			// TRIM : REMOVE UNUSEFUL SPACES
	 		var newItem = $scope.newItem.trim();
            console.log(item);
			console.log(todo);

			// NONE EMPTY TODO
 			if(!newItem.length) 
 				return;
			
 			$scope.todos.push({
 				title : newTodo,
 				completed : false
 			});

 			// SET ITEM TO LOCAL STORAGE
 			$scope.setItem();

 			// GET ITEM FROM LOCALSTORAGE
 			$scope.getItem();

 			// Réinitialisation de la variable newItem
 			$scope.newItem = '';

 			
	 	};

		/***
			FUNCTION ADD SUB ELEMENT TO A TODO
		***/
	 	$scope.addSubElement = function () {
	 		console.log('ajout sub élément');

	 		console.log($scope.newSubTodos);

	 		/*var newSubTodo = $scope.newSubTodo.trim();
            console.log(newSubTodo);

 			if(!newSubTodo.length) {
 				// éviter les todo  vides
 				return;
 			}
 			todos.push({
 				title : newSubTodo,
 				completed : false
 			});
            console.log(todos);

 			console.log('push');

 			// Réinitialisation de la variable newTodo
 			$scope.newSubTodo = '';*/
	 	};

	 	

		/***
			FUNCTION REMOVE A TODO
		***/
	 	$scope.removeTodo = function (index) {
			todos.splice(index, 1);
			localStorage.removeItem("list"+ index);
			
			// SET ITEM TO LOCAL STORAGE
 			$scope.setItem();

 			// GET ITEM FROM LOCALSTORAGE
 			$scope.getItem();
	 	};
		
		
		/***
			FUNCTION EDIT A TODO
		***/
	 	$scope.editTodo = function (todo,title) {
	 		console.log('edit');			
			console.log(todo);
			console.log(title);
			// Supprime le todo et ajoute le nouveau
			todos.splice(todos.indexOf(todo), 1, todo);
			
			// SET ITEM TO LOCAL STORAGE
 			$scope.setItem();

 			// GET ITEM FROM LOCALSTORAGE
 			$scope.getItem();
	 	};


	 	// Cocher/ décocher tous les todos
	 	$scope.markAll = function (completed) {
	 		todos.forEach(function (todo) {
	 			todo.completed = !completed;
	 		});
	 	};


	 	// Enlever tous les todos cochés
	 	$scope.clearCompletedTodos = function () {
	 		$scope.todos = todos = todos.filter(function (todo) {
	 			return !todo.completed;
	 		});
	 	};
	} 
]);


todoList.directive('showTodo', function($compile) {
	return function (scope, element, attrs) {
		element.bind("change", function() {
		});
	};
});