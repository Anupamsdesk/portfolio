'use strict';
var app = angular.module('portfolio01App');

app.constant('AppConfig', {
	'title': 'Anupam Singh',
	'pages': [
		{
			'text': 'Who am I?',
			'link': 'intro'
		},
		{
			'text': 'Objectives',
			'link': 'objectives'
		},
		{
			'text': 'Skills',
			'link': 'skills'
		},
		{
			'text': 'Education',
			'link': 'education'
		},
		{
			'text': 'Experience',
			'link': 'experience'
		},
		{
			'text': 'Projects',
			'link': 'projects'
		},
		{
			'text': 'Contact',
			'link': 'contact'
		}
	]
});

app.constant('Education', [
		{
			title: 'Master of Technology',
			abbrev: 'M Tech.',
			subject: 'Computer Science',
			category: 'Post-Graduate',
			institute: {
				fullName: 'Indian Institute of Technology, Guwahati',
				shortName: 'IIT Ghy',
				location: 'Guwahati, India.'
			},
			year: 2009,
			grade: '9.7 / 10.0'
		},
		{
			title: 'Bachelor of Technology',
			abbrev: 'B Tech.',
			category: 'Graduate',
			subject: 'Information Technology',
			institute: {
				fullName: 'Calcutta University',
				location: 'Kolkata, India.'
			},
			year: 2007
		},
		{
			title: 'Bachelor of Science',
			abbrev: 'B Sc.',
			subject: 'Computer Science',
			category: 'Graduate',
			institute: {
				fullName: 'St. Xavier\'s College',
				location: 'Kolkata, India.'
			},
			year: 2004
		}
	]);


app.constant('Experience', [
		{
			company: 'ValueLabs',
			designation: 'Sr. System Analyst',
			location: 'Hyderabad, India',
			yearFrom: 2014,
			yearTo: 'till date',
			role: 'Full-Stack Developer'
		},
		{
			company: 'The Advisory Board Company',
			designation: 'Software Engineer',
			location: 'Chennai, India',
			yearFrom: 2013,
			yearTo: 2014,
			role: 'Full-Stack Developer'
		},
		{
			company: 'POWERGRID Corpn. of India',
			designation: 'Software Engineer',
			location: 'Gurgaon, India',
			yearFrom: 2009,
			yearTo: 2013,
			role: 'Full-Stack Developer'
		}
		
	]);



app.constant('Skills', {
	languages: [
		{ name: 'C#', years: 6, rating: 9, remarks: ''},
		{ name: 'Javascript', years: 6, rating: 9, remarks: ''},
		{ name: 'C/C++', years: 9, rating: 8},
		{ name: 'Python', years: 3, rating: 7},
		{ name: 'Java', years: 3, rating: 7},
		{ name: 'Scala', years: 1.5, rating: 7},
		{ name: 'F#', years: 1.5, rating: 7},
		{ name: 'HTML5', years: 1.5, rating: 9}
	],
	frameworks: [
		{name: 'Entity Framework 5.0', years: 6, rating: 9},
		{name: 'ASP.Net & ADO.Net', years: 6, rating: 9},
		{name: 'Node JS', years: 2, rating: 8},
		{name: 'Express JS', years: 2, rating: 8},
		{name: 'Mongoose', years: 2, rating: 8},
		{name: 'Grunt', years: 1.5, rating: 7},
		{name: 'Mocha', years: 1.5, rating: 7},
		{name: 'Jasmine', years: 1.5, rating: 7},
		{name: 'Karma', years: 1.5, rating: 7},
		{name: 'JQuery', years: 6, rating: 8},
		{name: 'Angular JS', years: 2, rating: 9},
		{name: 'Backbone JS', years: 2, rating: 9},
		{name: 'D3 JS', years: 0.5, rating: 6},
		{name: 'Underscore JS', years: 3, rating: 9}
	],
	databases: [
		{ name: 'SQL Server', years: 6, rating: 9 },
		{ name: 'Mongo DB', years: 2, rating: 8 },
		{ name: 'Redis', years: 1, rating: 6 },
		{ name: 'MySQL Server', years: 3, rating: 6 },
		{ name: 'Neo4J', years: 0.5, rating: 6 }
	]
});

/* Controllers */
app.controller('AppCtrl', ['AppConfig','$scope', function(AppConfig, $scope){
	$scope.title = AppConfig.title;
	$scope.pages = AppConfig.pages;
}]);

app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });


