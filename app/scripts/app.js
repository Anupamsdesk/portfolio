'use strict';

angular
  .module('portfolio01App', [
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        redirectTo: '/main'
      })
      .when('/objectives', {
        templateUrl: 'views/objectives.html'
      })
      .when('/education', {
        templateUrl: 'views/education.html',
        controller: 'EducationCtrl'
      })
      .when('/skills', {
        templateUrl: 'views/skills.html',
        controller: 'SkillsCtrl'
      })
      .when('/intro', {
        templateUrl: 'views/intro.html'
      })
      .when('/main',{
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/experience',{
        templateUrl: 'views/experience.html',
        controller: 'ExperienceCtrl'
      })
      .when('/projects',{
        templateUrl: 'views/projects.html',
        controller: 'ProjectsCtrl'
      })
      .when('/contact',{
        templateUrl: 'views/contact.html'//,
        //controller: 'ProjectsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
