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
    question: 'What I do?',
    details:
      "I'm a Senior Angular Web Developer. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special.",
    skills: [
      { name: 'CSS', percent: '90' },
      { name: 'HTML', percent: '90' },
      { name: 'JavaScript', percent: '80' },
      { name: 'TypeScript', percent: '70' },
      { name: 'Angular', percent: '90' },
      { name: 'AWS', percent: '60' },
      { name: 'Docker', percent: '80' },
      { name: 'Jenkins', percent: '80' },
      { name: 'Jasmine', percent: '90' },
      { name: 'Karma', percent: '90' },
      { name: 'ESlint', percent: '80' },
      { name: 'React', percent: '50' },
      { name: 'NestJS', percent: '40' },
      { name: 'MongoDB', percent: '40' },
    ],
  };

  public projects: Project[] = [
    {
      name: 'CAT CAIS PORTAL',
      image: '',
      lang: 'Angular',
    },
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
      name: 'Engineering Collaboration System',
      image: './assets/projectsImages/AECOM-Web-Application.jpg',
      lang: 'React',
    },
  ];

  public projectDetails = [
    {
      Name: 'CAT CAIS PORTAL',
      Client: 'FINRA',
      Description:
        'CAT CAIS Portal is a web-based tool that allows CAT Reporters to monitor and manage data submissions to the Customer and Account Information System (CAIS). The Portal includes end-to-end capability for providing complete and accurate data to CAIS, including the ability to manually enter and upload data, monitor submissions, and review and correct errors. ',
      Responsibilities: [
        'Led the development of the website using Angular (versions 11 to 16), demonstrating expertise in modern web application frameworks.',
        'Utilized HTML5 and CSS3 to create responsive and visually appealing user interfaces, ensuring cross-browser compatibility and adherence to web standards.',
        'Employed TypeScript for writing more robust and type-safe code, enhancing the maintainability and reliability of the application.',
        'Configured and managed Jenkins pipelines for continuous integration and delivery, automating build and deployment processes',
        'Created and managed Docker images to containerize the application, ensuring consistency across development, testing, and production environments.',
        'Leveraged various AWS services and console features to host and scale the application, demonstrating proficiency in cloud computing and infrastructure managementUsed Ngrx to manage the state through the whole application and isolated side effects to promote a cleaner component architecture.',
        'Ensured high code quality and coding standards compliance using lint tools, contributing to the maintainability and readability of the codebase.',
        'Transitioned from TSLint to ESLint for improved code analysis and linting, aligning with modern development practices. Delivered high-quality tested code that follows best practices by using Jasmine and Karma.',
        'Implemented unit testing using Jasmine and Karma to validate individual components, ensuring application stability and performance',
        'Successfully upgraded the Angular framework from version 11 to 16, managing dependencies and mitigating migration challenges.',
        'Deployed and utilized internal artifacts within the development lifecycle, streamlining the development process.',
        'Worked in an Agile-Scrum environment, contributing to team collaboration, sprint planning, and iterative development.Used Jenkins for deployment and CI/CD.',
        'Leveraged various Angular features such as modules, components, services, directives, and RxJS Observables for asynchronous operations to build a robust and modular web application ensuring smooth data flow and user interactions.',
        'Converted Nginx to Apache reverse proxy, optimizing performance, security, and flexibility as an intermediary between clients and backend servers.'
      ],
      image: '',
      location: 'Remote',
      time: 'Apr 2023 - Present',
    },
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
      time: 'Jan 2021 - Apr 2023',
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
      time: 'Feb 2018 - May 2019',
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
