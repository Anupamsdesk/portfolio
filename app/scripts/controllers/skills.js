/* globals app */
app.controller('SkillsCtrl', function ($scope, Skills) {
  'use strict';
  $scope.skills = Skills;
});

app.controller('EducationCtrl', function ($scope, Education) {
  'use strict';
  $scope.collection = Education;
});



app.controller('ExperienceCtrl', function ($scope, Experience) {
  'use strict';
  $scope.collection = Experience;
});


app.controller('ProjectsCtrl', function ($scope) {
  'use strict';
  $scope.activeIndex = -1;

  
  $scope.getActive = function(index){
    return 'panel-collapse collapse ' + (index === $scope.activeIndex ? 'in' : '');
  };

  $scope.toggleContent = function(index){
    
    $scope.activeIndex = ($scope.activeIndex === index) ? -1: index;
    console.log('active content set to ' + index);
  };

  $scope.collection = [
    {
      title: 'Tag v5',
      from: '20/01/2014',
      to: 'present',
      summary: 'An asset management tool. Client - Williams Lea',
      technicalSummary: 'Backbone, JQuery, Underscore, NodeJS, Mocha, Selenium, Grunt, LESS, Bootstrap etc',
      text: 'Tag is a digital asset management tool used by giants like Intel, Jaguar etc. Backbone, JQuery, Underscore, NodeJS, Mocha, Selenium, Grunt, LESS, Bootstrap etc',
      attributes: [
        {key: 'Duration', value: 'January 2014 - till date'},
        {key: 'Directors/Supervisors',
          value: 'Onur Halilcolar, UI Head, TAG UK., Gideon Van-der-ness, TAG - South Africa'
        },
        {key: 'Team', value: 'Distributed team (UK, South Africa, India)'},
        {key: 'Role', value: 'Lead UI Develope'},
        {
          key: 'Technologies used',
          value: 'NodeJs, Express, Redis, Knockout, AngularJs, JQuery, Karma, Grunt, Yeoman, FogBugz, Kiln.'
        }
      ]

    },
    {
      title: 'Devmetrics',
      from: '20/01/2013',
      to: '10/01/2014',
      summary: 'A real-time application for analyzing developer performance.',
      technicalSummary: 'NodeJs, Express, Redis, Knockout, AngularJs, JQuery, Karma, Grunt, Yeoman, FogBugz, Kiln.',
      text: ' A real-time application for analyzing developer performance. Technologies: NodeJs, Express, Redis, Knockout, AngularJs, JQuery, Karma, Grunt, Yeoman, FogBugz, Kiln.',
      attributes: [
        {
          key: 'Duration',
          value: 'January 2013 - Jan 2014'
        },
        {
          key: 'Directors/ Supervisors',
          value: 'Ammad Jilani, Sr. Director ABCO'
        },
        {
          key: 'Team Size',
          value: 4
        },
        {
          key: 'Role',
          value: 'Designer, Lead Developer'
        },
        {
          key: 'Technologies used',
          value: 'Node JS, Express, Knockout, Angular JS, Redis, MongoDB, JQuery, FogBugz Api, Kiln Client, Grunt, Yeoman, Karma'
        }
      ]
    },
    {
      title: 'Crimson Capitalization App (CCApp)',
      from: '15/05/2013',
      to: 'present',
      summary: 'An internal tool for tracking & reporting Crimson Developer productivity.',
      text: 'It is a tool used internally to track developer productivity.',
      attributes: [
        {
          key: 'Duration',
          value: 'May ’13 – Till Date [6 +months]'
        },
        {
          key: 'Directors/ Supervisors',
          value: 'Ammad Jilani, John Zang'
        },
        {
          key: 'Team Size',
          value: 4
        },
        {
          key: 'Role',
          value: 'Designer, Lead Developer'
        },
        {
          key: 'Technologies used',
          value: 'C#, ASP.NET, Javascript, Angular JS, JQuery, Elmah, Nunit, Nuget, Microsoft Web Services for Outlook, Kiln and Fogbugz Api.'
        }
      ]
    },
    {
      title: 'Crimson-Analytics',
      from: '15/05/2013',
      to: 'present',
      summary: 'A framework for analytics of Crimson products ',
      text: 'It consists of a Javascript framework for the front end to efficiently track web-application data using Google Analytics. A Server side application to fetch Analytics data using Google Reporting Api v3.0 using OAuth 2 with Private Key for authentication and security. Generation of excel reports and automated emails for management.',
      attributes: [
        {
          key: 'Duration',
          value: 'April ’13 – September ’13 [6 months]'
        },
        {
          key: 'Directors/ Supervisors',
          value: 'Faqir Ahmed, Sr. Director ABCO'
        },
        {
          key: 'Team Size',
          value: 4
        },
        {
          key: 'Role',
          value: 'Designer, Lead Developer'
        },
        {
          key: 'Technologies used',
          value: 'C#, ASP.NET, Javascript, JQuery, OAuth 2.0, Google Apis, Node Js'
        }
      ]
    },
    {
      title: 'Survangular ',
      from: '',
      to: '',
      summary: 'A highly customisable  and robust survey Application',
      text: '',
      attributes: [
        {
          key: 'Duration',
          value: 'Since December 2014'
        },
        {
          key: 'Team Size',
          value: 2
        },
        {
          key: 'Role',
          value: 'Designer, Lead Developer'
        },
        {
          key: 'Technologies used',
          value: 'NodeJs, Angular, Yeoman, Neo4j Graph Database'
        },
        {
          key: 'Github Repo.',
          value: 'https://github.com/Anupamsdesk/NeoSurvangular'

        }
      ]
    },
    {
      title: 'POWERGRID - HR Website and Database',
      from: 'August, 2009',
      to: 'January, 2012',
      summary: 'The website is built using ASP.NET, Handlebars and JQuery, JQuery UI,SQL Server etc.',
      text: '',
      attributes: [
        {
          key: 'Duration',
          value: 'August 2009 - January 2012'
        },
        {
          key: 'Team Size',
          value: 4
        },
        {
          key: 'Role',
          value: 'Full Stack Developer'
        },
        {
          key: 'Technologies used',
          value: 'ASP.NET, C#, Entity Framework, JQuery, JQuery UI, SQL Server'
        },
        {
          key: 'Link',
          value: 'http://hr.powergridindia.com'
        }
      ]
    }


  ];
});