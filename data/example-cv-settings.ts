import { type Cv, LEVELS } from '~/types/cvfy';

export const cvSettingTemplate: Cv = {
  jobTitle: 'Middle Web Developer',
  name: 'Nghia',
  lastName: 'Ngo',
  email: 'nghia.nvt291@gmail.com',
  location: 'TPHCM, Vietnam',
  phoneNumber: '0938863878',
  aboutme:
    "My name is Nghia Ngo. Developer with over 4 Years of experience in PHP/Laravel Framework.\n" +
    "I always ready to learn new technologies.\n" +
    "High responsibility.\n" +
    "Good at teamwork, reading and listening.\n" +
    "Ability to read and understand the plugin and apply it to the project quickly.\n" +
    "Basic communication skill in English.\n" +
    "Able to work with Full-stack position.",
  jobSkills: ['Php', 'Laravel', 'VueJs', 'Javascript'],
  softSkills: ['Positivity', 'Leadership', 'Public Speaking'],
  languages: [{ lang: 'English', level: LEVELS[3] }],
  linkedin: '',
  twitter: '',
  github: '',
  website: 'https://github.com/nghiangodev',
  education: [
    {
      title: 'Hoa sen University',
      location: 'Viet Nam',
      from: new Date(1993, 9, 1),
      to: new Date(1993, 4, 1),
      current: false,
      summary: '<p>Software Engineer</p>',
    },
    {
      title: 'FPT Aptech',
      location: 'Viet Nam',
      from: new Date(1993, 9, 1),
      to: new Date(1993, 4, 1),
      current: false,
      summary: '<p>Software Engineer</p>',
    },
  ],
  work: [
    {
      title: 'Lot Corporation',
      location: 'USA',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary:
        '<ul><li><p>In placerat nisi pellentesque felis blandit, vel varius justo eleifend.</p></li><li><p>Etiam porttitor tortor vel lobortis ultricies.</p></li><li><p>Nam non libero accumsan, sagittis nibh vitae, auctor ligula.</p></li><li><p>Sed hendrerit dui a ante porttitor, vitae tristique ipsum laoreet.</p></li><li><p>Suspendisse interdum mauris a lectus dignissim, vitae aliquet ante tempor.</p></li></ul>',
    },
    {
      title: 'Ihouzz Technology',
      location: 'VN',
      from: new Date(2012, 1, 1),
      to: new Date(),
      current: true,
      summary:
        '<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>',
    },
    {
      title: 'Cloudteam',
      location: 'VN',
      from: new Date(2012, 1, 1),
      to: new Date(),
      current: true,
      summary:
        '<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>',
    },
  ],
  projects: [
    {
      title: 'https://tiemvangngoctam.com/',
      location: 'VN',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary:
        '<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>',
    },
    {
      title: 'https://phatgiao.info/',
      location: 'VN',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary:
        '<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>',
    },
    {
      title: 'https://ketnoithienchua.com/',
      location: 'VN',
      from: new Date(2009, 1, 1),
      to: new Date(2012, 1, 1),
      current: true,
      summary:
        '<ul><li><p>Sed ut lorem viverra urna malesuada interdum in ut risus.</p></li><li><p>Duis at sem non justo aliquam iaculis.</p></li><li><p>Quisque lobortis nibh non turpis interdum ornare.</p></li><li><p>Sed et diam nec arcu tempor suscipit sit amet at tellus.</p></li><li><p>Duis quis diam imperdiet, pharetra lacus eget, fringilla odio.</p></li></ul>',
    },
  ],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};

export const cvSettingsEmptyTemplate: Cv = {
  jobTitle: '',
  name: '',
  lastName: '',
  email: '',
  location: '',
  phoneNumber: '',
  aboutme: '',
  jobSkills: [],
  softSkills: [],
  languages: [],
  linkedin: '',
  twitter: '',
  github: '',
  website: '',
  education: [],
  work: [],
  projects: [],
  displayEducation: true,
  displayProjects: false,
  activeColor: '#5B21B6',
};
