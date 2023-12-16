import { Faq, FaqCategory } from '../types/Faq';

const ceremonyFaq: FaqCategory[] = [
  {
    question: 'How do we sign up?',
    answer: `Sign-up links will be made available for attendance purposes when registration opens. You may retrieve the links from our social media (Instagram, Telegram, LinkedIn) and our website.`,
  },
  {
    question: 'What can I expect for the opening ceremony?',
    answer:
      'There will be panel discussions held by various companies such as AWS, ByBit, Visa, Thought Machine, and many more! Look forward to some interesting activities and goodie bags too! Last but not least, the live announcement of this year’s Hackathon problem statement!',
  },
];

const hackathonFaq: FaqCategory[] = [
  {
    question: 'Who is eligible to take part in the hackathon?',
    answer:
      'NUS FinTech Month Hackathon 2023 is open to students from tertiary education institutes across the globe!',
  },
  {
    question:
      'Is there anything to take note of if I am participating from overseas?',
    answer:
      'All workshops and seminars are still open for your participation, just remember to sign up (using the respective forms) for any that you are interested in and we will get in touch with you! If you qualify as a <b>finalist</b>, you (and your team) will be required to be <b>present physically</b> for our Demo Day.',
  },
  {
    question: 'Are there any requirements for the hackathon team formation?',
    answer: `The team should consist of 2-5 members. Team members need not be from the same school. Please appoint a Team Lead to be the main point of contact. We will communicate with the Team Leads through email.`,
  },
  {
    question: 'How do we sign-up?',
    answer: `Sign-up links will be made available when registration opens. Stay tuned to our website and social media pages (Instagram, Telegram, LinkedIn) to find out more!\n
    Each team should only sign up once. Please appoint a Team Lead and fill up all team members’ particulars as stated in the form\n. 
    In the event of any changes, do email our team at nusfintech.ops@gmail.com.
    `,
  },
  {
    question: 'When is NUS Fintech Hackathon 2023?',
    answer: `
    1. Ideation (3 days): 6th Jan to 8th Jan 2023, 2359<br>
    2. Internal judging 1st round (4 days): 9th Jan to 12th Jan 2023<br>
    3. Prototyping (4 days): 12th Jan to 15th Jan 2023, 2359<br>
    4. Internal judging 2nd round (2 days): 15th Jan to 20th Jan 2023<br>
    5. Last Minute Hacks by Finalist: 20th Jan to 26th Jan 2023, 2359<br>
    `,
  },
  {
    question: 'Will the hackathon be conducted remotely?',
    answer: `Most of the hackathons will be conducted remotely with the exception of demo day where finalists will be invited to do a live presentation pitch at the NUS campus. For overseas finalists, it will be live-streamed on YouTube.`,
  },
  {
    question: 'What is the NUS Fintech Month Hackathon 2023 Format?',
    answer: `NUS Fintech Month Hackathon 2023 is comprised of three rounds:<br>
    <br>
    1. <u>Ideation Stage</u>. Teams will have a total of 3 days (6th Jan to 8th Jan 2359) to research and ideate to create novel solutions for the problem statement. <br>
    <br> 
    2. <u>Prototyping Stage</u>. Qualifying teams will then generate their prototype within 4 days. All submissions for the prototype will be due (15th Jan 2359).<br>
    <br>
   3. <u>Demo Day</u>. The top 10 teams from the prototyping stage with the best prototypes will be invited to NUS Fintech Month 2023 Demo Day (27th Jan). Teams will have a total of 15 minutes to pitch their prototypes in front of a panel of distinguished judges to compete for the top prize. For teams outside of Singapore, your pitch will be done virtually over YouTube.`,
  },
  {
    question: 'What are the requirements for hackathon submission?',
    answer: `NUS Fintech Month Hackathon 2023 is comprised of three rounds of submission:<br>
    <br>
    1. Ideation Stage<br>
    &emsp;Submission Requirements:<br>
    &emsp;&emsp;&emsp;&emsp;<b>1. Proposal Slide deck 5 slides (Summary of project)</b><br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1. Executive Summary of Fintech Service/API<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2. Problem Statement/Ideation/Motivation<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3. Solution provided<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;4. General Tech Stack<br>
    &emsp;&emsp;&emsp;&emsp;<b>2. Ideation Report</b><br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;1. Problem Statement/Ideation/Motivation<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;2. Tech Stack (Languages/Packages/Frameworks)<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;3. Structure of Code/Frameworks (UML Diagram/ML Pipeline)<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;4. Explanation of the use of Blockchain/ ML in the API (e.g. Algorithms/ Models)<br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;5. Any additional relevant key information<br>
    <br>
    2. Prototyping Stage<br>
    &emsp;Submission Requirements:<br>
    &emsp;&emsp;&emsp;&emsp;<b>1. Video Pitch with API demo (max 3 minutes)</b><br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;a. Video pitch should run through features of the API<br>
    &emsp;&emsp;&emsp;&emsp;<b>2. Working deployment of API</b><br>
    &emsp;&emsp;&emsp;&emsp;<b>3. GitHub Source Code</b><br>
    &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;a. All changes must be documented in the GitHub Source Code<br>
    <br>
    3. Finals<br>
    &emsp;Submission Requirements:<br>
    &emsp;&emsp;&emsp;&emsp;<b>1. Presentation Slides for Live Demo (max 5 Mins)</b><br>
    &emsp;&emsp;&emsp;&emsp;<b>2. Deployment of API with minor bug fixes/refinements conducted</b><br>
    `,
  },
  {
    question: 'Where do we submit our files for the hackathon?',
    answer: `All submissions will be done via Devpost which participants can access through our website.`,
  },
  {
    question: 'What are the judging criteria?',
    answer: `NUS Fintech Month Hackathon 2023 is comprised of three rounds of judging:<br>
    <br>
    <u>1. Ideation Stage</u><br>
    &emsp;&emsp;<b>a. Business</b><br>
    &emsp;&emsp;&emsp;&emsp;i. Business Potential (20%)<br>
    &emsp;&emsp;&emsp;&emsp;ii. Creativeness of Solution (20%)<br>
    &emsp;&emsp;<b>b. Technical</b><br>
    &emsp;&emsp;&emsp;&emsp;i. Relevancy to Fintech Month Theme and problem statement (20%)<br>
    &emsp;&emsp;&emsp;&emsp;ii. Blockchain and/or Machine learning Sophistication(20%)<br>
    &emsp;&emsp;&emsp;&emsp;iii. Feasibility of Solution (20%)<br>
    <br>
    <u>2. Prototyping Stage</u><br>
    &emsp;&emsp;<b>a. Business</b><br>
    &emsp;&emsp;&emsp;&emsp;i. Business Potential (20%)<br>
    &emsp;&emsp;&emsp;&emsp;ii. Uniqueness of Solution (20%)<br>
    &emsp;&emsp;<b>b. Technical</b><br>
    &emsp;&emsp;&emsp;&emsp;i. Source Code Quality (10%)<br>
    &emsp;&emsp;&emsp;&emsp;i. Extent of use of sponsor’s API/Tools (10%)<br>
    &emsp;&emsp;&emsp;&emsp;iii. Relevancy to Fintech Month Theme and problem statement (15%)<br>
    &emsp;&emsp;&emsp;&emsp;iv. Depth of application of Blockchain and/or Machine Learning technology (15%)<br>
    &emsp;&emsp;&emsp;&emsp;v. Scalability of solution (10%)<br>
    <br>  
    <u>3. Finals</u><br>
    &emsp;&emsp;<b>a. Business</b><br>
    &emsp;&emsp;&emsp;&emsp;i. Business Potential (20%)<br>
    &emsp;&emsp;&emsp;&emsp;ii. Uniqueness of Solution (20%)<br>
    &emsp;&emsp;<b>b. Technical</b><br>
    &emsp;&emsp;&emsp;&emsp;i. UI/UX (10%)<br>
    &emsp;&emsp;&emsp;&emsp;ii. Extent of use of sponsor’s API/Tools (10%)<br>
    &emsp;&emsp;&emsp;&emsp;iii. Relevancy to Fintech Month Theme and problem statement (15%)<br>
    &emsp;&emsp;&emsp;&emsp;iv. Depth of application of Blockchain and/or Machine Learning technology (15%)<br>
    &emsp;&emsp;&emsp;&emsp;v. Scalability of solution (10%)<br>
    <br>
    Keep a look out for the shortlisted teams of each stage on our website and social media platforms, as well as your email!
    `,
  },
  {
    question: 'What does it cost?',
    answer: `There will be no registration fee for participating.`,
  },
  {
    question: 'Who do we reach out to if we have more enquiries?',
    answer: `If you have any further questions, please do not hesitate to contact us at nusfintech.ops@gmail.com.`,
  },
];

const workshopsFaq: FaqCategory[] = [
  {
    question: 'How do we sign-up?',
    answer: `Sign-up links will be made available when registration opens. You may retrieve the links from our website. Under the respective forms, please indicate the attendance accordingly.`,
  },
  {
    question: 'Can I attend the workshop virtually? ',
    answer:
      'Most workshops will be held physically at NUS and live-streamed at the same time. ',
  },
  {
    question: 'Are the workshops compulsory for hackathon participants?',
    answer: `The workshops are not compulsory for hackathon participants. The workshops are meant to better equip all participants, regardless of their background and experience. If you do not require any additional help/guidance, you need not sign up for the workshops`,
  },
  {
    question:
      'If I am not participating in the hackathon, can I still sign up for any of the workshops?',
    answer: `In the spirit of learning, workshops will be opened to all tertiary students. Do look out for our lineup of workshops on our website and social media platforms (Instagram, Telegram, LinkedIn). `,
  },
  {
    question: 'How many workshops can I sign up for?',
    answer: `There is no limit to the maximum number of workshops you can sign up for. However, there will be limited vacancies for each workshop.`,
  },
];

const demoDayFaq: FaqCategory[] = [
  {
    question:
      'Will all hackathon participants be physically present at the venue?',
    answer: `Sign-up links will be made available when registration opens for attendance purposes. Registration links will be open till <b>20th Jan</b>, and late submissions will not be entertained.  Stay tuned to our website and social media pages (Instagram, Telegram, LinkedIn) to find out more!`,
  },
  {
    question:
      'Must all hackathon participants be physically present at the venue?',
    answer:
      'All hackathon participants will be encouraged to be physically present at the venue. However, a live stream on Youtube will also be present for participants to join remotely.',
  },
];

const othersFaq: FaqCategory[] = [];

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
  {
    categoryName: 'Others',
    data: othersFaq,
  },
  {
    categoryName: 'Question not found? Contact Us',
    data: othersFaq,
  },
];
