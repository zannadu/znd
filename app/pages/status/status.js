angular.module('projectDemo.statusPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'status',
    url:'/status',
    templateUrl:'app/pages/status/status.html'
  })
})
