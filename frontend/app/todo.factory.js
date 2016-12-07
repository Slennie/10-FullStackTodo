(function() {
    'use strict';

    angular
        .module('app')
        .factory('todoFactory', todoFactory);

    todoFactory.$inject = ['$http'];

    /* @ngInject */
    function todoFactory($http) {
        var service = {
            create: create,
            getAll: getAll,
            getById: getById,
            update: update,
            remove: remove
        };
        return service;

        ////////////////

        function create(todo) {
        	return $http.post('http://localhost:54608/api/todoitems', todo);
        }

        function getAll() {
        	return $http.get('http://localhost:54608/api/todoitems');
        }

        function getById(id) {
        	return $http.get('http://localhost:54608/api/todoitems/' + id);
        }

        function update(id, todo) {
        	return $http.put('http://localhost:54608/api/todoitems/' + id, todo);
        }

        function remove(id) {
        	return $http.delete('http://localhost:54608/api/todoitems/' + id);
        }

    }
})();