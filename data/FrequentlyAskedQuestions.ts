import { Faq, FaqCategory } from '../types/Faq';

const hackathonFaq: FaqCategory[] = [
  {
    question: 'Who is eligible to take part in the hackathon?',
    answer:
      'All students from tertiary education institutes around the world are welcome to sign up for the hackathon. You don’t necessarily have to be from NUS!',
  },
  {
    question: 'Test Question 2',
    answer: 'Sample Answer 2',
  },
  {
    question: 'Test Question 3',
    answer: 'Sample Answer 3',
  },
  {
    question: 'Test Question 4',
    answer: 'Sample Answer 4',
  },
  {
    question: 'Test Question 5',
    answer: 'Sample Answer 5',
  },
];

export const Faqs: Faq[] = [
  {
    categoryName: 'Hackathon',
    data: hackathonFaq,
  },
  {
    categoryName: 'Workshops & Symposiums',
    data: hackathonFaq,
  },
];
