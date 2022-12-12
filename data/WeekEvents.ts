import { Week, WeekEvent } from '../types/WeekEvent';

export const Weeks: Week[] = [
  {
    id: 0,
    label: 'Pre-Registration',
  },
  {
    id: 1,
    label: 'Week 1',
    date: '6 Jan - 12 Jan',
  },
  {
    id: 2,
    label: 'Week 2',
    date: '13 Jan - 19 Jan',
  },
  {
    id: 3,
    label: 'Week 3',
    date: '20 Jan - 26 Jan',
  },
];

export const WeekEvents: WeekEvent[][] = [
  [
    {
      id: 0,
      date: '12 Dec - 30 Dec',
      title: 'Fintech Month Hackathon Registration',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 1,
      date: '12 Dec - 30 Dec',
      title: 'Workshop Registration',
      label: 'Fintech Month Hackathon',
    },
  ],
  [
    {
      id: 0,
      date: '6 Jan',
      time: '8:00AM-6:00PM',
      venue: 'COM2-LT19',
      title: 'Opening Address (NUS Fintech Month)',
      label: 'Fintech Month',
    },
    {
      id: 1,
      date: '6 Jan',
      time: '11:00AM-12:00PM',
      title:
        'VC Landscape in Open source & API-First Companies (Panel Discussion)',
      venue: 'TBC',
      label: 'Panel Discussion',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Defiance Capital',
          speaker: 'Yeou Jie Goh',
          position: 'Position',
          imageSrc: '/Speakers/YEOUJIEGOH.png',
        },
        {
          id: 1,
          organisation: 'SIG',
          speaker: 'Akshay Bajaj',
          position: 'Position',
          imageSrc: '/Speakers/AKSHAYBAJAJ.png',
        },
        {
          id: 2,
          organisation: 'Saison Capital',
          speaker: 'Ziheng Li',
          position: 'Position',
          imageSrc: '/Speakers/ZIHENGLI.png',
        },
        {
          id: 3,
          organisation: 'Blockchain Founders Fund',
          speaker: 'Tobias Bauer',
          position: 'Position',
        },
      ],
    },
    {
      id: 2,
      date: '6 Jan',
      time: '3:00PM-4:00PM',
      title: 'BC Panel (Panel Discussion)',
      venue: 'TBC',
      label: 'Panel Discussion',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Visa',
          speaker: 'Nischint Sanghavi',
          position: 'Position',
          imageSrc: '/Speakers/NISCHINT.png',
        },
      ],
    },
    {
      id: 3,
      date: '9 Jan',
      time: '06:00PM-7:00PM',
      title:
        'Navigating the Payments Space in the Digital Age & Careers in Fintech Startups',
      venue: 'TBC',
      label: 'Panel Discussion',
      speakerInfo: [
        {
          id: 0,
          organisation: 'PayerMax',
          speaker: 'Lee Yi Liang',
          position: 'Position',
          imageSrc: '/Speakers/LEEYILIANG.png',
        },
      ],
    },
    {
      id: 4,
      date: '9 Jan',
      time: '7:30PM',
      title: 'All Things Tokens & Launchpads',
      venue: 'Zoom',
      label: 'Workshop',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Impossible Finance',
          speaker: 'Calvin Chu',
          position: 'Position',
          imageSrc: '/Speakers/CALVINCHU.png',
        },
      ],
    },
    {
      id: 5,
      date: '10 Jan',
      time: '6:00PM-6:45PM',
      title: 'Learn how to integrate Pyth into your applications',
      label: 'Workshop',
      venue: 'Online',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Pyth',
          speaker: 'Daniel Chew',
          position: 'Position',
          imageSrc: '/Speakers/DANIELCHU.png',
        },
      ],
    },
    {
      id: 6,
      date: '10 Jan',
      time: '7:30PM-9:00PM',
      title: 'Why Enterprise Blockchain Implementation Fail',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'SettleMint',
          speaker: 'Johnny Kok',
          position: 'Position',
          imageSrc: '/Speakers/JOHNNYKOK.png',
        },
        {
          id: 0,
          organisation: 'SettleMint',
          speaker: 'Elton Tay',
          position: 'Position',
          imageSrc: '/Speakers/ELTONTAY.png',
        },
      ],
    },
    {
      id: 7,
      date: '11 Jan',
      time: '6:00PM-6:45PM',
      title: 'Digital Currencies 101',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Visa',
          speaker: 'Nischint Sanghavi',
          position: 'Position',
          imageSrc: '/Speakers/NISCHINT.png',
        },
      ],
    },
    {
      id: 8,
      date: '12 Jan',
      title: 'Ideation Result Release',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 9,
      date: '12 Jan',
      title: 'Start of Prototyping',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 10,
      date: '12 Jan',
      time: '6:00PM-6:45PM',
      title: 'The Future of Commerce in Web3/Metaverse Era',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Mastercard',
          speaker: 'Huang Donghao',
          position: 'Position',
          imageSrc: '/Speakers/HUANGDONGHAO.png',
        },
      ],
    },
    {
      id: 11,
      date: '13 Jan',
      time: '6:30PM-8:15PM',
      title: 'Machine Learning Applications in Fintech',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Airwallex',
          speaker: 'Krishna Parthasarathy',
          position: 'Position',
        },
      ],
    },
    {
      id: 12,
      date: '13 Jan',
      time: '5:30PM-7:30PM',
      title: 'LynxKite - Introduction to Graph Machine Learning',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Lynx Analytics',
          speaker: 'Gabor Balazs Benedek',
          position: 'Position',
        },
      ],
    },
  ],
  [
    {
      id: 0,
      date: '15 Jan',
      time: '23:59PM',
      title: 'Prototyping Submission',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 1,
      date: '19 Jan',
      time: '12:00PM-1:00PM',
      title: 'Technical workshop',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Certik',
          speaker: 'Shan',
          position: 'Position',
        },
      ],
    },
    {
      id: 2,
      date: '19 Jan',
      time: '6:00PM',
      title: 'Unleashing the Power of Web3 on your App',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Coinbase',
          speaker: 'Hassan Ahmed',
          position: 'Position',
        },
      ],
    },
    {
      id: 3,
      date: '19 Jan',
      time: '7:30PM',
      title: 'Fireside chat - Breaking into Web3 and Analyst Work ',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Arcane Group',
          speaker: 'Glen Aw',
          position: 'Position',
        },
      ],
    },
    {
      id: 4,
      date: '20 Jan',
      title: 'Prototyping Results Release',
      label: 'Fintech Month Hackathon',
    },
  ],
  [
    {
      id: 0,
      date: '27 Jan',
      time: '8:00AM-4:00PM',
      title: 'Demo Day + Ending Address',
      label: 'NUS Fintech Month',
    },
  ],
];
