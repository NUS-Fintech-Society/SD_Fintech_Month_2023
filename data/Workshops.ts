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
            linkedin:
              'https://www.linkedin.com/in/jivey99/?originalSubdomain=ca',
            image: '/Speakers/ripple_1.jpeg',
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
            linkedin: 'https://sg.linkedin.com/in/pekyee-julia-chin',
            image: '/Speakers/jfourth_1.jpg',
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
            linkedin:
              'https://sg.linkedin.com/in/sheng-shi-chiam-cfa-12907315a',
            image: '/Speakers/endowus_1.png',
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
            linkedin: 'https://sg.linkedin.com/in/naman-sharma',
            image: '/Speakers/lseg_1.png',
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
            linkedin: 'https://sg.linkedin.com/in/jerry-yang-ab993925b',
            image: '/Speakers/nus_stats_1.png',
          },
          {
            name: 'Shayaan Sultan',
            position: 'Workshop Executive',
            linkedin: 'https://sg.linkedin.com/in/shayaan-sultan',
            image: '/Speakers/nus_stats_2.png',
          },
        ],
      },
      {
        day: 'Wednesday',
        date: 'Wednesday, 10 Jan',
        time: '4pm - 4.45pm',
        name: 'Forging the Future - Blockchain Education & Talent Empowerment',
        venue: 'Virtual',
        organization: 'Polkadot Blockchain Academy',
        logo: {
          src: '/Workshops/polkadot.jpeg',
          height: '400px',
          width: '800px',
          url: 'https://polkadot.network/development/blockchain-academy/',
        },
        speaker: [],
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
          {
            name: 'Li Liang',
            position: 'Head of OTC',
            linkedin: 'https://sg.linkedin.com/in/liang-li-6231bb223',
            image: '/Speakers/hashkey_1.png',
          },
          {
            name: 'Ryan Chen',
            position: 'Partner',
            linkedin: 'https://sg.linkedin.com/in/ryan-chen-313a20273',
            image: '/Speakers/hashkey_2.jpg',
          },
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
            linkedin: 'https://www.linkedin.com/in/yuyangguo',
            image: '/Speakers/coinbase_1.png',
          },
          {
            name: 'Qi Wu',
            position: 'Software Engineer',
            linkedin: 'https://www.linkedin.com/in/qi-wu-6182a63a',
            image: '/Speakers/coinbase_2.png',
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
            linkedin: 'https://sg.linkedin.com/in/cliffton-lee-879562a4',
            image: '/Speakers/arbitrum_1.jpg',
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
            linkedin: 'https://sg.linkedin.com/in/lianxing-ye-a71704a1',
            image: '/Speakers/alibaba_1.jpg',
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
            linkedin: 'https://au.linkedin.com/in/robert-thomson-a0a451145',
            image: '/Speakers/binance_1.jpeg',
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
        organization: 'Tokka Labs',
        speaker: [
          {
            name: 'Cheng Qian',
            position: 'Quant Trader',
            linkedin: 'https://sg.linkedin.com/in/cheng-qian-747b5192',
            image: '/Speakers/tokka_1.jfif',
          },
        ],
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
        organization: 'aelf',
        logo: {
          src: '/Sponsor/aelf_logo.png',
          height: '80px',
          width: '178px',
          url: 'https://aelf.com/',
        },
        speaker: [
          {
            name: 'Lu Yimeng',
            position: 'Senior Back-end Developer',
            image: '/Speakers/aelf_1.jpg',
          },
          {
            name: 'Loong Yong En',
            position: 'Senior Front-end Developer',
            image: '/Speakers/aelf_2.jpg',
          },
        ],
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
            linkedin: 'https://sg.linkedin.com/in/alvinchiajiahao',
            image: '/Speakers/northern_trust_1.jpeg',
          },
        ],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '1pm - 1.45pm',
        name: null,
        venue: 'Physical',
        organization: 'Metacamp',
        logo: {
          src: '/Sponsor/metacamp_logo.png',
          height: '60px',
          width: '414px',
          url: 'https://www.metacamp.so/',
        },
        speaker: [
          {
            name: 'Jonas Chen',
            position: 'Co-founder',
            linkedin: 'https://sg.linkedin.com/in/jonas-chen',
            image: '/Speakers/metacamp_1.jpeg',
          },
        ],
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
            linkedin: 'https://www.linkedin.com/in/lukeerichardson/',
            image: '/Speakers/thought_machine_1.png',
          },
          {
            name: 'Anthony Halim',
            position: 'Site Reliability Engineer',
            linkedin: 'https://sg.linkedin.com/in/anthony-halim',
            image: '/Speakers/thought_machine_2.jpeg',
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
            linkedin:
              'https://sg.linkedin.com/in/bowen-liu-torino?trk=public_post_feed-actor-name',
            image: '/Speakers/ocbc_1.jpeg',
          },
          {
            name: 'Jorden Seet',
            position: 'Head of Blockchain',
            linkedin: 'https://www.linkedin.com/in/jordenseet/',
            image: '/Speakers/ocbc_2.jpg',
          },
        ],
      },
      {
        day: 'Friday',
        date: 'Friday, 12 Jan',
        time: '4pm - 4.45pm',
        name: null,
        organization: 'Tencent',
        venue: 'Physical',
        logo: {
          src: '/Workshops/tencent.jpg',
          height: '889px',
          width: '2162px',
          url: 'https://www.tencent.com/en-us',
        },
        speaker: [
          {
            name: 'Yao Ping',
            position:
              'Manager Business Development, Tencent Financial Technology (Tenpay Global)',
            image: '/Speakers/tencent_1.jpeg',
          },
        ],
      },
    ],
  },
};
