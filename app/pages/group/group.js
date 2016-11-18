angular.module('projectDemo.groupPage',[])
.config(function($stateProvider,$urlRouterProvider){

  $stateProvider
  .state({
    name:'group',
    url:'/group',
    templateUrl:'app/pages/group/group.html'
  })
})
