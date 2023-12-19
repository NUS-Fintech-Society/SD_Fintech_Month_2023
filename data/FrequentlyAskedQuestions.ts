import { Faq, FaqCategory } from '../types/Faq';

const ceremonyFaq: FaqCategory[] = [
  {
    question: 'How do we sign up?',
    answer:
      'You can sign up via the link on our Linktree which will go live on 20 December 2023. Attendance is compulsory to all Hackathon participants.',
  },
  {
    question: 'What can I expect for the opening ceremony?',
    answer:
      'A panel discussion as well as breakout rooms for each problem challenge where participants can check 1 to 1 with the judges/mentors! There’ll also be free goodies for everyone as well!',
  },
];

const hackathonFaq: FaqCategory[] = [
  {
    question: 'Who is eligible to take part in the Hackathon?',
    answer:
      'NUS Fintech Summit 2024 is open to all tertiary students across the globe.',
  },
  {
    question:
      'Is there anything to take note of if I am participating from overseas?',
    answer:
      'If you qualify as a finalist, you (and your team) will be required to be present physically for our Demo Day.',
  },
  {
    question: 'Are there any requirements for the Hackathon team formation?',
    answer:
      'The team should consist of 2-5 members from any tertiary institute. Please appoint a Team Lead to be the main point of contact throughout the Hackathon.',
  },
  {
    question: 'How do we sign-up?',
    answer:
      'Sign-ups will be made available on 20th December 2023. Each team should only sign up once and appoint a team lead. If any changes arise, please email our team at nusfintech.ops@gmail.com.',
  },
  {
    question: 'Will the hackathon be conducted remotely?',
    answer:
      'The Hackathon will be conducted remotely with the exception of opening ceremony, hackerhouse (for finalist) and demo day. Overseas finalists are strongly encouraged to be be present physically.',
  },
  {
    question: 'Where do we submit our files for the hackathon?',
    answer: 'You can submit on Devpost through the link on our Linktree.',
  },
  {
    question: 'What is the judging criteria and submission requirements?',
    answer:
      'Refer to the Hackathon Details pages for the rubrics for each round.',
  },
  {
    question: 'What does it cost?',
    answer: 'No registration fee is required.',
  },
  {
    question: 'Who do we reach out to if we have more enquiries?',
    answer:
      'If you have any further questions, you can contact us via nusfintech.ops@gmail.com.',
  },
];

const workshopsFaq: FaqCategory[] = [
  {
    question: 'How do we sign-up?',
    answer:
      'You may retrieve the workshop signup links from our LinkTree. They are 3 signup forms for each respective day of workshops - 10th Jan 24, 11th Jan 24 and 12th Jan 24.',
  },
  {
    question: 'Can I attend the workshop virtually? ',
    answer:
      'Workshops held on 10th and 11th January 2024 are virtual while the workshops held on 12th January 2024 are physical at NUS.',
  },
  {
    question: 'Are the workshops compulsory for hackathon participants?',
    answer:
      'Workshops are not compulsory for hackathon participants. These are meant to provide participants with insights on the developments within the Fintech space.',
  },
  {
    question:
      'If I am not participating in the hackathon, can I still sign up for any of the workshops?',
    answer: 'Yes, the workshops are open to all tertiary students and public.',
  },
  {
    question: 'How many workshops can I sign up for?',
    answer: 'There is no limit to the number of workshops you can sign up for.',
  },
];

const demoDayFaq: FaqCategory[] = [
  {
    question: 'Sign-up links will be made available on our Linktree!',
    answer: `Sign-up links will be made available when registration opens for attendance purposes. Registration links will be open till <b>20th Jan</b>, and late submissions will not be entertained.  Stay tuned to our website and social media pages (Instagram, Telegram, LinkedIn) to find out more!`,
  },
  {
    question:
      'Must all hackathon participants be physically present at the venue?',
    answer:
      'All hackathon participants are required to be physically present at Suntec (please inform us if any of your members will not be able to attend).',
  },
];

export const Faqs: Faq[] = [
  {
    categoryName: 'Opening Ceremony',
    data: ceremonyFaq,
  },
  {
    categoryName: 'Hackathon',
    data: hackathonFaq,
  },
  {
    categoryName: 'Workshops',
    data: workshopsFaq,
  },
  {
    categoryName: 'Demo Day',
    data: demoDayFaq,
  },
];
