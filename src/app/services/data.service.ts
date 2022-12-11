import { Injectable } from '@angular/core';
import { Details, Feature } from './data.interface';

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
    question: 'Who is this guy?',
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

  constructor() {}
}
