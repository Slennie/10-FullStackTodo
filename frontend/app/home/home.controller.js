(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['todoFactory'];

    function HomeController(todoFactory) {
        var vm = this;

        vm.posts = [];

        vm.addPost = addPost;

        vm.order = 'text';

        vm.deletePost = deletePost

        activate();



        var color = {
            3: 'list-group-item-action list-group-item-success',
            2: 'list-group-item-action list-group-item-warning',
            1: 'list-group-item-action list-group-item-danger'
        };

        vm.getColor = function(post) {
            return color[post.priority];
        }

        //////////////////////

        function activate() {
            todoFactory
                .getAll()
                .then(function(response) {
                    vm.posts = response.data;
                });
        }

        function addPost() {
            if (vm.newClass) {
                todoFactory
                    .create({
                        text: vm.newPost,
                        priority: vm.newClass
                    })
                    .then(function(response) {
                        vm.posts.push(response.data);
                    });
            } else {
                alert('please choose a priority.');
            }


        }

        function deletePost(post) {
            todoFactory
                .remove(post.todoItemId)
                .then(function(response) {
                    var index = vm.posts.indexOf(post);

                    vm.posts.splice(index, 1);
                });
        }


    } 

})();
