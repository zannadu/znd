angular.module('projectDemo.moviePage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'movie',
    url:'/movie',
    templateUrl:'app/pages/movie/movie.html'
  })
})
