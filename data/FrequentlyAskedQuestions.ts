import { Faq, FaqCategory } from '../types/Faq';

const hackathonFaq: FaqCategory[] = [
  {
    question: 'Who is eligible to take part in the hackathon?',
    answer:
      'All students from tertiary education institutes around the world are welcome to sign up for the hackathon. You don’t necessarily have to be from NUS!',
  },
  {
    question: 'Are there any requirements for the hackathon team formation?',
    answer:
      'The team should consist of 2-5 members. Team members need not be from the same school. Please appoint a team leader to be the main point of contact.',
  },
  {
    question: 'How do we sign-up?',
    answer: `Sign-up links will be made available when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn). For overseas students, the links will be disseminated to their faculty who will then assist in disseminating the sign up links to them.\n
    Each team should only sign up once. Please appoint a team leader and fill up all team members’s particulars as stated in the form.\n
    In case of any changes, do email our team at nusfintech.ops@gmail.com.`,
  },
  {
    question: 'How many rounds are there in the hackathon?',
    answer: `There are a total of 2 rounds.\n
    In the Ideation Stage, teams have 4 days to conduct research and ideation for their solution to the problem statement. Top half of participating teams will be selected after the Ideation Stage to move on to the Prototyping Stage to code out their prototype or MVP (minimum viable product). The prototypes will then be assessed to select the finalists of the hackathon, who will be invited to attend the demo day. These teams will be pitching their prototypes to a panel of distinguished judges who are made up of industry experts and professors to compete for the top prizes. For teams outside of Singapore, this presentation will be done virtually over zoom.`,
  },
  {
    question: 'Will the hackathon be conducted remotely?',
    answer: `Most of the hackathon will be conducted remotely, except for the demo day where finalists who are in Singapore will be invited to do a Live presentation on NUS campus to a panel of judges.`,
  },
  {
    question: 'What should the format of the file be for hackathon submission?',
    answer: `Submissions for both stages will be in the form of a short video recording (10mins) where the idea or prototype can be presented in any way the team thinks is best. The videos are to be uploaded to YouTube as an unlisted video, and the video link submitted via Google Forms.`,
  },
  {
    question: 'Where do we submit our files for the hackathon?',
    answer: `Please submit the 5 mins video via google forms on the 17 January by 2359 (First round) and 28 January  (Finalist teams) by 2359. Please remember to enable sharing with nusfintech.ops@gmail.com or allow anyone on the internet to access the link.`,
  },
  {
    question: 'What are the judging criterias?',
    answer: `TBC`,
  },
  {
    question: 'Who do we reach out to if we have more enquiries?',
    answer: `Please email our team at nusfintech.ops@gmail.com.`,
  },
];

const workshopsFaq: FaqCategory[] = [
  {
    question: 'How do we sign-up?',
    answer: `Sign-up links will be made available when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn).\n
      There will be 3 separate forms, first for introductory workshops, second for industry workshops, and third for symposiums. Under each form, please indicate all the sessions that you are keen on attending.`,
  },
  {
    question: 'Will the workshops be conducted virtually?',
    answer:
      'Introductory and Industry workshops will be conducted virtually via Zoom. Some symposiums will be conducted physically with online live streaming.',
  },
  {
    question: 'Are the workshops compulsory for hackathon participants?',
    answer: `No. The workshops are meant to better equip all participants, regardless of their background, for the hackathon. If you do not require any additional help/guidance, you need not sign up for the workshops.`,
  },
  {
    question:
      'If I am not participating in the hackathon, can I still sign up for any of the workshops?',
    answer: `Yes, you may still sign up for the workshops.`,
  },
  {
    question: 'How many workshops can I sign up for?',
    answer: `There is no limit to the maximum number of workshops you can sign up for.`,
  },
];

const demoDayFaq: FaqCategory[] = [
  {
    question:
      'Will all hackathon participants be physically present at the venue?',
    answer: `No, in view of COVID-19 restrictions, only the finalist teams based in Singapore will be invited down to the venue. For overseas finalists, they will be presenting via Zoom. However, a Live Stream event will be made available to the rest of the participants.`,
  },
  {
    question:
      'Is it compulsory for all hackathon participants to join in the Live Stream?',
    answer:
      'No, but you are highly encouraged to join us for an exciting lineup of pitches made by our finalist teams to a panel of external judges!',
  },
];

export const Faqs: Faq[] = [
  {
    categoryName: 'Hackathon',
    data: hackathonFaq,
  },
  {
    categoryName: 'Workshops & Symposiums',
    data: workshopsFaq,
  },
  {
    categoryName: 'Demo Day',
    data: demoDayFaq,
  },
];
