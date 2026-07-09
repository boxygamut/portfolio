// ─────────────────────────────────────────────────────────────────────────────
//  ★ SINGLE SOURCE OF CONTENT ★
//
//  Everything the site displays comes from this file. To update your portfolio,
//  edit the values below. You never need to touch the components.
// ─────────────────────────────────────────────────────────────────────────────

export type Link = {
  label: string;
  href: string;
};

export type Project = {
  name: string;
  description: string;
  tech: string[];
  links: Link[];
};

export type Experience = {
  company: string;
  role: string;
  dates: string;
  bullets: string[];
};

export type Site = {
  name: string;
  title: string;
  tagline: string;
  bio: string;
  location?: string;
  contact: {
    email?: string;
    github?: string;
    website?: string;
  };
  skills: string[];
  projects: Project[];
  experience: Experience[];
};

export const site: Site = {
  name: 'Daniel Yeh',
  title: 'Machine Learning Enthusiast',
  tagline: 'Into machine learning and robotics, mostly computer vision and VEX.',
  bio:
    'I’m Daniel, a student in the Silicon Valley. Most of what I do outside of class is machine ' +
    'learning and robotics. I got into ML through computer vision and still spend most of ' +
    'my time there, usually training models and trying to work out why they aren’t doing ' +
    'what I expected. A good chunk of my programming actually comes from VEX robotics, where ' +
    'I write the code for our competition robots. I mostly use Python, with Java and C/C++ ' +
    'from robotics and coursework.',
  location: 'Silicon Valley',

  contact: {
    email: 'daniel.px.yeh@gmail.com',
    github: 'https://github.com/boxygamut',
    website: undefined,
  },

  skills: ['Python', 'Java', 'C++', 'C'],

  projects: [
    {
      name: 'CNN Vehicle Classification',
      description:
        'A convolutional neural network I trained in PyTorch to classify different types ' +
        'of vehicles from images. I built the project in a Jupyter notebook as part of my application for a summer program.',
      tech: ['Python', 'PyTorch', 'Jupyter'],
      links: [{ label: 'GitHub', href: 'https://github.com/boxygamut/CNN-Classification' }],
    },
    {
      name: 'BlueJ++',
      description:
        'A custom build of the BlueJ Java IDE. ' +
        'I used BlueJ for a large portion of my AP CSA class and found that navigating a long ' +
        'file was tedious, so I took inspiration from GitHub’s symbol viewer and implemented a ' +
        'similar feature in BlueJ.',
      tech: ['Java', 'Gradle'],
      links: [{ label: 'GitHub', href: 'https://github.com/boxygamut/bluej-plus-plus' }],
    },
  ],

  experience: [
    {
      company: 'VEX Robotics Competition, Team 95071V',
      role: 'Programmer',
      dates: '2026 - Present',
      bullets: [
        'Program the autonomous routines and driver control for our robot.',
        'Use PID control, motion profiling, and odometry with encoder and inertial-sensor feedback, along with Monte Carlo localization (MCL), to make autonomous runs consistent and repeatable.',
      ],
    },
    {
      company: 'VEX Robotics Competition, Team 95071X',
      role: 'Programmer',
      dates: '2024 - 2026',
      bullets: [
        'Wrote and tuned the autonomous routines and driver controls in C++ for the team’s robot.',
        'Implemented PID control and sensor feedback from encoders and an inertial sensor for accurate autonomous scoring.',
        'Iterated on mechanisms with the build team throughout the season to improve reliability and consistency.',
        'Competed with the team through my freshman and sophomore years, placing in top brackets at regional, state, and national tournaments.',
      ],
    },
  ],
};
