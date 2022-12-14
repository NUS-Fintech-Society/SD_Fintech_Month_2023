import { Week, WeekEvent } from '../types/WeekEvent';

export const Weeks: Week[] = [
  {
    id: 0,
    label: 'Registration',
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
      date: '12 Dec',
      title: 'Fintech Month Hackathon Registration',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 1,
      date: '12 Dec',
      title: 'Workshop Registration',
      label: 'Fintech Month Hackathon',
    },
  ],
  [
    {
      id: 0,
      date: '6 Jan',
      time: '9:00AM-6:00PM',
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
          position: 'Head of Portfolio Growth',
          imageSrc: '/Speakers/YEOUJIEGOH.png',
        },
        {
          id: 1,
          organisation: 'SIG',
          speaker: 'Akshay Bajaj',
          position: 'Investor',
          imageSrc: '/Speakers/AKSHAYBAJAJ.png',
        },
        {
          id: 2,
          organisation: 'Saison Capital',
          speaker: 'Ziheng Li',
          position: 'Investor',
          imageSrc: '/Speakers/ZIHENGLI.png',
        },
        {
          id: 3,
          organisation: 'Blockchain Founders Fund',
          speaker: 'Tobias Bauer',
          position: 'Partner',
          imageSrc: '/Speakers/TOBIAS.png',
          
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
      label: 'Workshop',
      speakerInfo: [
        {
          id: 0,
          organisation: 'PayerMax',
          speaker: 'Lee Yi Liang',
          position: 'Board Director & Regional Head of Compliance',
          imageSrc: '/Speakers/LEEYILIANG.png',
        },
      ],
    },
    {
      id: 4,
      date: '9 Jan',
      time: '7:30PM - 8.30PM',
      title: 'All Things Tokens & Launchpads',
      venue: 'Virtual',
      label: 'Workshop',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Impossible Finance',
          speaker: 'Calvin Chu',
          position: 'Core BUIDLer',
          imageSrc: '/Speakers/CALVINCHU.png',
        },
      ],
    },
    {
      id: 5,
      date: '10 Jan',
      time: '6:00PM-6:45PM',
      title: 'Integrate with Pyth',
      label: 'Workshop',
      venue: 'Virtual',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Pyth',
          speaker: 'Daniel Chew',
          position: 'Software Engineer',
          imageSrc: '/Speakers/DANIELCHEW.png',
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
          position: 'Regional Crypto Lead, Asia Pacific',
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
          position: 'Vice President, R&D',
          imageSrc: '/Speakers/HUANGDONGHAO.png',
        },
      ],
    },
    {
      id: 11,
      date: '12 Jan',
      time: '7:30PM-8:15PM',
      title: 'Machine Learning Applications in Fintech',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Airwallex',
          speaker: 'Krishna Parthasarathy',
          position: 'Senior Data Scientist',
          imageSrc: '/Speakers/KRISHNA.png',
        },
      ],
    },
  ],
  [
    {
      id: 12,
      date: '13 Jan',
      time: '5:30PM-7:30PM',
      title: 'Introduction to Graph Machine Learning',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Lynx Analytics',
          speaker: 'Gabor Balazs Benedek',
          position: 'Co-founder & Chief Innovation Officer',
          imageSrc: '/Speakers/GABOR.png',
        },
      ],
    },
    {
      id: 17,
      date: '13 Jan',
      time: '7:30PM-8:30PM',
      title: 'Gateway to Web3 and Security',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'BitEx',
          speaker: 'Vayne Poh',
          position: 'Co-founder & Chief Innovation Officer',
          imageSrc: '/Speakers/VAYNE.jpeg',
        },
        {
          id: 1,
          organisation: 'Merkle Science',
          speaker: 'Tom Luo',
          position: 'Director of Sales, APAC and EMEA',
          imageSrc: '/Speakers/TOM.jpg',
        },
      ],
    },
    {
      id: 0,
      date: '15 Jan',
      time: '23:59PM',
      title: 'Prototyping Submission',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 18,
      date: '16 Jan',
      time: '6PM-7PM',
      title: 'Web3 101',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'OCBC',
          speaker: 'Celine Wan',
          position: 'Assistant Vice President, Fintech & Ecosystems',
          imageSrc: '/Speakers/CELINE.jpeg',
        },
      ],
    },
    {
      id: 19,
      date: '17 Jan',
      time: '6PM-7PM',
      title: 'Fintech Partnership - When Superheroes Meet',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Mastercard',
          speaker: 'Ling Li Li',
          position: 'Fintech and Enablers Lead',
          imageSrc: '/Speakers/LILI.jpeg',
        },
      ],
    },
    {
      id: 20,
      date: '17 Jan',
      time: '7.30PM-8.15PM',
      title: 'Day in the Life of a Research Analyst',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Nansen',
          speaker: 'Lim Xin Yi',
          position: 'Research Analyst',
          imageSrc: '/Speakers/LIMXINYI.png',
        },
      ],
    },
    {
      id: 21,
      date: '18 Jan',
      time: '6PM-7PM',
      title: 'Women and Careers in Crypto',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Talos',
          speaker: 'Pamela Lee',
          position: 'Head of Sales, APAC',
          imageSrc: '/Speakers/PAMELA.png',
        },
      ],
    },
    {
      id: 6,
      date: '18 Jan',
      time: '7:30PM-9:00PM',
      title: 'Why Enterprise Blockchain Implementation Fail',
      label: 'Workshop',
      venue: 'TBC',
      speakerInfo: [
        {
          id: 0,
          organisation: 'SettleMint',
          speaker: 'Johnny Kok',
          position: 'VP Commercial, APAC',
          imageSrc: '/Speakers/JOHNNYKOK.png',
        },
        {
          id: 0,
          organisation: 'SettleMint',
          speaker: 'Elton Tay',
          position: 'Blockchain Solutions Architect, APAC',
          imageSrc: '/Speakers/ELTONTAY.png',
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
          position: 'Regional Director, Southeast Asia',
          imageSrc: '/Mentors/HASSAN.png',
        },
      ],
    },
    
    {
      id: 3,
      date: '19 Jan',
      time: '7:30PM - 9PM',
      title: 'Breaking into Web3 and Analyst Work ',
      label: 'Fireside Chat',
      venue: 'Arcane Office ',
      speakerInfo: [
        {
          id: 0,
          organisation: 'Arcane Group',
          speaker: 'Glen Aw (Moderator)',
          position: 'Associate',
          imageSrc: '/Speakers/GLEN.png',
        },

        {
          id: 1,
          organisation: 'CertiK',
          speaker: 'Shui Shan Shan',
          position: 'Business Development Representative',
          imageSrc: '/Speakers/SHAN.png',
        },

        {
          id: 2,
          organisation: 'Hashed',
          speaker: 'Edward Tan',
          position: 'Investor',
          imageSrc: '/Speakers/EDWARD.png',
        },
        {
          id: 3,
          organisation: 'QCP Capital',
          speaker: 'Stan Low',
          position: 'Investment Analyst',
          imageSrc: '/Speakers/STAN.png',
        },
        {
          id: 4,
          organisation: 'Tribe',
          speaker: 'Tricia Neo',
          position: 'Account Lead',
          imageSrc: '/Speakers/TRICIA.png',
        },
        {
          id: 5,
          organisation: 'Delphi',
          speaker: 'Josh Lam',
          position: 'Data Engineer',
          imageSrc: '/Speakers/JOSH.png',
        },
      ],
    },

  ],
  [
    {
      id: 4,
      date: '20 Jan',
      title: 'Prototyping Results Release',
      label: 'Fintech Month Hackathon',
    },
    {
      id: 0,
      date: '27 Jan',
      time: '8:00AM-4:00PM',
      title: 'Demo Day + Ending Address',
      label: 'NUS Fintech Month',
    },
  ],
];
