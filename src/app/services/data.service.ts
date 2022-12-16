import { Injectable } from '@angular/core';
import { Details, Feature, Project } from './data.interface';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  public features: Feature[] = [
    {
      title: 'Fast',
      body: 'Fast load times and lag free interaction, my highest priority.',
      icon: 'bolt',
    },
    {
      title: 'Responsive',
      body: 'My layouts will work on any device, big or small.',
      icon: 'devices',
    },
    {
      title: 'Intuitive',
      body: 'Strong preference for easy to use, intuitive UX/UI.',
      icon: 'lightbulb',
    },
    {
      title: 'Dynamic',
      body: "Websites don't have to be static, I love making pages come to life.",
      icon: 'rocket_launch',
    },
  ];

  public myDetails: Details = {
    question: 'What do I do?',
    details:
      "I'm a Front-End Developer for EXTENSIV remotly. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.",
    skills: [
      { name: 'CSS', percent: '90' },
      { name: 'HTML', percent: '90' },
      { name: 'JavaScript', percent: '80' },
      { name: 'TypeScript', percent: '70' },
      { name: 'Angular', percent: '80' },
      { name: 'React', percent: '50' },
      { name: 'NestJS', percent: '40' },
      { name: 'MongoDB', percent: '40' },
    ],
  };

  public projects: Project[] = [
    {
      name: 'Skubana Dashboard',
      image: './assets/projectsImages/Skubana-Web-Application.png',
      lang: 'Angular',
    },
    {
      name: 'Pharmacy Platform (JUDI)',
      image: './assets/projectsImages/Capital-Rx-Web-Application.jpeg',
      lang: 'Angular',
    },
    {
      name: 'Mckinsey Insights App',
      image: './assets/projectsImages/Mckinsey-Web-Application.jpg',
      lang: 'Angular',
    },
    {
      name: 'Engineering Collaboration System',
      image: './assets/projectsImages/AECOM-Web-Application.jpg',
      lang: 'React',
    },
  ];

  public projectDetails = [
    {
      Name: 'Skubana Dashboard',
      Client: 'EXTENSIV',
      Description:
        'Extensive is a software company that connects brands and 3PLs to create more flexible and reliable fulfillment networks that exceed today’s sky-high consumer expectations. Skubana is an eCommerce inventory and order management for brands and sellers. ',
      Responsibilities: [
        'Developed and designed web app with the use of HTML5, CSS3, TypeScript, Angular 11+, JavaScript, NestJS, and MongoDB.',
        'Worked with various features in Angular such as data binding, routing, guards, and resolvers to meet various customer requirements. Developed custom pipes to transform and maintain backend data based on custom requirements and display for users.',
        'Developed complex forms using Reactive Forms, performed validation using Validators and created custom validators for data entered by users such as email, passwords, etc.',
        'Designed cross-browser compatible HTML5/CSS3 layouts and implemented dynamic elements and reusable libraries with TypeScript and Angular 11.',
        'Used Angular Material to design an attractive and dynamic web application.',
        'Used Ngrx to manage the state through the whole application and isolated side effects to promote a cleaner component architecture.',
        'Refactored the application into 4 feature modules and implemented lazy loading for a better user experience.',
        'Delivered high-quality tested code that follows best practices by using Jasmine and Karma.',
        'Worked on Restful API to fetch the required data and display it to users.',
        'Used the Interceptors of HttpClient along with JWT token for authentication and authorization.',
        'Worked in an Agile-Scrum development methodology to ensure the delivery of high-quality work with monthly iterations.',
        'Used Jenkins for deployment and CI/CD.',
      ],
      image: './assets/projectsImages/Skubana-Web-Application.png',
      location: 'Remote',
      time: 'Jan 2021 - present',
    },
    {
      Name: 'Pharmacy Platform (JUDI)',
      Client: 'CAPITAL RX',
      Description:
        'Capital Rx is a full-service pharmacy benefit manager for employers and pharmacy benefit administrators servicing health plans. Their innovative solutions reduce costs, drive efficiency, improve member experience, and eliminate confusion around benefits. JUDI is a revolutionary technology that was built from the ground up, is designed to help members navigate their benefits, reduce costs, and eliminate confusion around prescription drugs.',
      Responsibilities: [
        'Involved in creating reusable components using Angular 8 for building pages, components, services, modules, and predefined components from NPM.',
        'Utilized core Angular features such as HTTP, Data Binding, Forms, and Dependency Injection.',
        'Used custom Directives for reusable DOM manipulation and services to implement Dependency Injection.',
        'Worked with Karma and Jasmine, supporting the QA team to debug and write tests.',
        'Efficiently configured Git for the projects to maintain and control versions of source code.',
        'Performed Test Driven Development (TDD) and Behavior Driven Development (BDD)',
        'Team meetings and planning using Agile/Scrum methodology.',
        'Automated the build and deployment using Jenkins.',
        'Worked on CSS3 to design the UI.',
        'Implemented HTTP REST API using NestJS and extensively test the RESTful API using Postman.',
        'Worked with NestJS to write code on the server side and create scalable network applications.',
        'Worked with MySQL for database persistence.',
        'Implemented services, controllers, directives, and factory functions to properly consume API on the front end and send back data in JSON format to the backend by capturing it in the UI.',
      ],
      image: './assets/projectsImages/Capital-Rx-Web-Application.jpeg',
      location: 'New York, NY',
      time: 'Jun 2019 - Jan 2021',
    },
    {
      Name: 'Mckinsey Insights App',
      Client: 'Mckinsey & Company',
      Description:
        'McKinsey & Company is a global management consulting firm that provides professional services to corporations, governments and other organizations. They partner with their clients to unlock the potential of their people, embed transformative technologies in everything they do, and innovate sustainably. The impact they deliver helps clients achieve enduring change in their capabilities, and performance and speeds up the transition to sustainable and inclusive growth.',
      Responsibilities: [
        'Responsible for creating efficient design and developing user Interaction screens using Angular 5, HTML5, CSS3, and TypeScript.',
        'Created an HTML5 navigation bar that is used for routing using RouterModule with items changing dynamically and data derived from the database.',
        'Extensively used Angular 4 for heavy DOM manipulation.',
        'Implemented a responsive web application using Bootstrap and CSS.',
        'Worked with the BA team for a better understanding of functional requirements analyzed and designed the business requirements to be documented and implemented.',
        'Executed unit testing cases using Jasmine and Karma.',
        'Designed User interface web forms using Angular Reactive forms.',
        'Used CSS3 to define text alignment, size, borders, and many other typographic characteristics along with media queries.',
        'Used Agile Methodology and actively participated in daily Scrums for the software development life cycle.',
        'Achieved successful version control using GIT and performed simple debugging activities using Chrome developer tools.',
      ],
      image: './assets/projectsImages/Mckinsey-Web-Application.jpg',
      location: 'Los Angeles, CA',
      time: 'Feb 2018 - May 2019',
    },
    {
      Name: 'Engineering Collaboration System',
      Client: 'AECOM',
      Description:
        'AECOM is an infrastructure consulting firm, partnering with clients to solve the world’s most complex challenges and build legacies for generations to come. They deliver professional services spanning cities, transportation, buildings, water, new energy and the environment. Working throughout the project lifecycle for the purpose of delivering a better world.',
      Responsibilities: [
        'Developed dynamic multi-browser and mobile-friendly web application using JavaScript, React 15.5.4, CSS, Material UI, and PWA.',
        'Worked on fetching data from web services and databases using Axios to create multiple HTTP requests such as GET, POST, Patch, etc.',
        'Used React libraries such as React dropzone and Material UI to help users interact smoothly with the application.',
        'Extensively used CSS mechanisms to include different colours, layouts, widths, heights, image sizes, media queries and many other styling features.',
        'Used ExpressJs and NodeJS to communicate with external APIs and serve the front end.',
        'Implemented Progressive Web App (PWA) to create a mobile-friendly web application.',
        'Worked on PostgreSQL database.',
        'Used GIT version control to push the code to a higher environment.',
        'Implemented test cases and performed unit testing using Jest.',
        'Experienced the Agile development methodology by using JIRA and participating in sprint cycles.',
      ],
      image: './assets/projectsImages/AECOM-Web-Application.jpg',
      location: 'Los Angeles, CA',
      time: 'May 2017 - Feb 2018',
    },
  ];

  constructor() {}

  filterProjects(lang: string) {
    return this.projects.filter((item) => item.lang.toLowerCase() === lang);
  }

  filterDetails(name: string) {
    return this.projectDetails.filter((item) => item.Name === name);
  }
}
