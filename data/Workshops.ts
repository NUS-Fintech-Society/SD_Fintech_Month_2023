import { Workshop } from '../types/Workshop';

export const Workshops: {
  [date: string]: { link: string; workshops: Workshop[] };
} = {
  'Wednesday, 10 Jan': {
    link: 'http://tinyurl.com/nfs2024workshop10thjan24',
    workshops: [
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '10am - 10.45am',
        name: 'Exploring DeFi with the XRPL EVM Sidechain',
        venue: 'Virtual',
        organization: 'Ripple',
        logo: {
          src: '/Sponsor/ripple-logo.png',
          height: '100px',
          width: '200px',
          url: 'https://ripple.com/',
        },
        speaker: [
          {
            name: 'Jason Tigas',
            position: 'Developer Advocate',
          },
        ],
      },
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '11am - 11.45am',
        name: 'Managing Risk and Compliance in the world of Fintech',
        venue: 'Virtual',
        organization: 'JFourth Solutions',
        logo: {
          src: '/Workshops/JFourth Solutions.png',
          height: '258px',
          width: '1112px',
          url: 'https://www.jfourthsolutions.com/',
        },
        speaker: [
          {
            name: 'Julia Chin',
            position: 'Principal Consultant',
          },
        ],
      },
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '1pm - 1.45pm',
        name: 'Using AI & Technology to scale and engage clients in WealthTech',
        venue: 'Virtual',
        organization: 'EndowUs',
        logo: {
          src: '/Sponsor/endow_us_logo.png',
          height: '100px',
          width: '268px',
          url: 'https://endowus.com/',
        },
        speaker: [
          {
            name: 'Sheng Shi',
            position: 'Business Development and Partnership Lead',
          },
        ],
      },
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '2pm - 2.45pm',
        name: 'Global Bond Issuance: From Carbon Intensive to Transition?',
        venue: 'Virtual',

        organization: 'London Stock Exchange Group (LSEG)',
        logo: {
          src: '/Workshops/LSEG.png',
          height: '208px',
          width: '800px',
          url: 'https://www.lseg.com/en',
        },
        speaker: [
          {
            name: 'Sharma Naman',
            position: 'Senior Data Scientist',
          },
        ],
      },
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '3pm - 3.45pm',
        name: 'Introduction to LLMs',
        venue: 'Virtual',
        organization: 'NUS Statistics and Data Science Society',
        logo: {
          src: '/Workshops/nus_stats_logo.webp',
          height: '218px',
          width: '218px',
          url: 'https://www.nussciencelife.com/statistics-and-data-science-society',
        },
        speaker: [
          {
            name: 'Jerry Yang Shao Ern',
            position: 'Workshop Executive',
          },
          {
            name: 'Shayaan Sultan',
            position: 'Workshop Executive',
          },
        ],
      },
    ],
  },
  'Thursday, 11 Jan': {
    link: 'http://tinyurl.com/nfs2024workshop11thjan24',
    workshops: [
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '10am - 10.45am',
        name: [
          'Liquidity in Crypto Markets',
          'Outlook for Web3.0 Investment in a Regulated Era',
        ],
        venue: 'Virtual',
        organization: 'HashKey Capital',
        logo: {
          src: '/Sponsor/hashkey_logo.png',
          height: '80px',
          width: '242px',
          url: 'https://hashkey.capital/',
        },
        speaker: [
          { name: 'Li Liang', position: 'Head of OTC' },
          { name: 'Ryan Chen', position: 'Partner' },
        ],
      },
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '11am - 11.45am',
        name: 'Build on Base',
        venue: 'Virtual',
        organization: 'Coinbase',
        logo: {
          src: '/Sponsor/coinbase_logo.png',
          height: '80px',
          width: '200px',
          url: 'https://www.coinbase.com',
        },
        speaker: [
          {
            name: 'Yuyang Guo',
            position: 'Staff Software Engineer',
          },
          {
            name: 'Qi Wu',
            position: 'Software Engineer',
          },
        ],
      },
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '1pm - 1.45pm',
        name: 'What are DAOs, and how are they being governed?',
        venue: 'Virtual',
        organization: 'Arbitrum',
        logo: {
          src: '/Workshops/arbitrum.png',
          height: '351px',
          width: '1280px',
          url: 'https://arbitrum.io/',
        },
        speaker: [
          {
            name: 'Cliffton Lee',
            position: 'DAO Relations Lead',
          },
        ],
      },
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '2pm - 2.45pm',
        name: 'Alibaba Cloud Fintech Innovations',
        venue: 'Virtual',
        organization: 'Alibaba Cloud',
        logo: {
          src: '/Sponsor/alibaba_cloud_logo.png',
          height: '100px',
          width: '350px',
          url: 'https://sg.alibabacloud.com/',
        },
        speaker: [
          {
            name: 'Will Ye',
            position: 'Financial Industry Solution Architect Lead',
          },
        ],
      },
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '3pm - 3.45pm',
        name: 'Crypto Crime Investigations Techniques',
        venue: 'Virtual',
        organization: 'Binance',
        logo: {
          src: '/Workshops/binance.png',
          height: '2160px',
          width: '3840px',
          url: 'https://www.binance.com/',
        },
        speaker: [
          {
            name: 'Robert Thomson',
            position: 'Investigation Specialist',
          },
        ],
      },
      {
        day: 'Thursday',
        date: 'Thursday, 11 Jan',
        time: '4pm - 4.45pm',
        name: null,
        venue: 'Virtual',
        logo: {
          src: '/Sponsor/tokka_labs_logo.png',
          height: '40px',
          width: '246px',
          url: 'https://tokkalabs.com/',
        },
        organization: 'Tokka Labs (TBC)',
        speaker: [],
      },
    ],
  },
  'Friday, 12 Jan': {
    link: 'http://tinyurl.com/nfs2024workshop12thjan24',
    workshops: [
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '10am - 10.45am',
        name: null,
        venue: 'Physical',
        organization: 'aelf (TBC)',
        logo: {
          src: '/Sponsor/aelf_logo.png',
          height: '80px',
          width: '178px',
          url: 'https://aelf.com/',
        },
        speaker: [],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '11am - 11.45am',
        name: 'How to Pitch a Brilliant Idea? Creating a successful pitch in 5 steps.',
        organization: 'Northern Trust',
        venue: 'Physical',
        logo: {
          src: '/Sponsor/northern_trust_logo.png',
          height: '80px',
          width: '240px',
          url: 'https://www.northerntrust.com/',
        },
        speaker: [
          {
            name: 'Alvin Chia',
            position: 'SVP, Head of Digital Assets Innovation, APAC',
          },
        ],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '1pm - 1.45pm',
        name: null,
        venue: 'Physical',
        organization: 'Metacamp (TBC)',
        logo: {
          src: '/Sponsor/metacamp_logo.png',
          height: '60px',
          width: '414px',
          url: 'https://www.metacamp.so/',
        },
        speaker: [],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '2pm - 2.45pm',
        name: 'Idempotency in Financial Systems',
        venue: 'Physical',
        organization: 'Thought Machine',
        logo: {
          src: '/Sponsor/thought_machine_logo.png',
          height: '90px',
          width: '170px',
          url: 'https://www.thoughtmachine.net/',
        },
        speaker: [
          {
            name: 'Luke Richardson',
            position: 'Engineering Manager',
          },
          {
            name: 'Anthony Halim',
            position: 'Site Reliability Engineer',
          },
        ],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '3pm - 3.45pm',
        name: 'Purpose Bound Money',
        organization: 'OCBC',
        venue: 'Physical',
        logo: {
          src: '/Workshops/OCBC.png',
          height: '312px',
          width: '1160px',
          url: 'https://www.ocbc.com/group/gateway.page',
        },
        speaker: [
          {
            name: 'Liu Bowen',
            position: 'Lead Blockchain Engineer',
          },
          {
            name: 'Jorden Seet',
            position: 'Head of Blockchain',
          },
        ],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '4pm - 4.45pm',
        name: null,
        organization: 'Tencent (TBC)',
        venue: 'Physical',
        logo: {
          src: '/Workshops/tencent.jpg',
          height: '889px',
          width: '2162px',
          url: 'https://www.tencent.com/en-us',
        },
        speaker: [],
      },
    ],
  },
};
