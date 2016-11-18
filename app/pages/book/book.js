angular.module('projectDemo.bookPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'book',
    url:'/book',
    templateUrl:'app/pages/book/book.html'
  })
})
